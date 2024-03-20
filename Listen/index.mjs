import { EventEmitter } from "events";
function createNewsFeed() {
    const emitter = new EventEmitter();

    setInterval(() => {
        emitter.emit("newsEvent", "Notizie: È successo qualcosa in un posto.");
    }, 1000);
    emitter.on("newsEvent", (newsEvent) => {
        console.log(newsEvent);
    });
    setInterval(() => {
        emitter.emit("breakingNews", "Ultim'ora! È successo un GRANDE evento.");
    }, 4000);
    emitter.on("breakingNews", (breakingNews) => {
        console.log(breakingNews);
    });
    setTimeout(() => {
        emitter.emit("error", new Error("Errore di connessione al feed delle notizie."));
    }, 5000);
    emitter.on("error", (error) => {
        console.log(error);
    });
    return emitter;
}

const newsFeed = createNewsFeed();