let visitor;
async function addData(data) {
    try {
        await db.collection("visitors").add({
            ...data,
            created_at: firebase.firestore.Timestamp.fromDate(new Date())
        });
    } catch (error) {}
}

function callback(data) {
    visitor = data;
    addData(data);
}

const script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://geoip-db.com/jsonp';
const h = document.getElementsByTagName('script')[0];
h.parentNode.insertBefore(script, h);