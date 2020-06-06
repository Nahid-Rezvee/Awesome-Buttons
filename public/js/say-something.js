const whoInputDOM = document.querySelector("#who");
const messageInputDOM = document.querySelector("#message");
const saiDToolTipDOM = document.querySelector(".said-tooltip");

function saySomething() {
    if (!messageInputDOM.value) {
        return;
    }
    const comment = {
        visitor: visitor,
        who: whoInputDOM.value,
        message: messageInputDOM.value
    }
    addComment(comment);
}

async function addComment(data) {
    try {
        await db.collection("comments").add({
            ...data,
            created_at: firebase.firestore.Timestamp.fromDate(new Date())
        });
        saiDToolTipDOM.classList.add('show-tooltip');
        setTimeout(() => {
            resetForm();
            saiDToolTipDOM.classList.remove('show-tooltip');
            toggleSaySomething();
        }, 1000);
    } catch (error) {}
}

function resetForm() {
    whoInputDOM.value = "";
    messageInputDOM.value = "";
}