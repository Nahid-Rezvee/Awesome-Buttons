let visitor;
async function addData(data) {
    try {
        await db.collection("visitors").add({
            ...data,
            created_at: firebase.firestore.Timestamp.fromDate(new Date())
        });
    } catch (error) {}
}

function diff_hours(dt2, dt1) {
    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60);
    return Math.abs(Math.round(diff));
}

function callback(data) {
    visitor = data;
    db.collection("visitors")
        .where("latitude", "==", visitor.latitude)
        .where("longitude", "==", visitor.longitude)
        .orderBy("created_at", 'desc')
        .limit(1)
        .get()
        .then(function (querySnapshot) {
            if (querySnapshot.docs.length === 0) {
                return addData(data);
            }
            let lastVisited;
            querySnapshot.forEach(function (doc) {
                lastVisited = doc.data().created_at.toDate();
            });
            hoursBefore = diff_hours(new Date(), lastVisited);
            if (hoursBefore > 0) {
                return addData(data);
            }
        })
        .catch(function (error) {});
}

const script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://geoip-db.com/jsonp';
const h = document.getElementsByTagName('script')[0];
h.parentNode.insertBefore(script, h);