export class ChatMessage {
    $key?: string; // refers to a key on firebase.
    email?: string;
    userName?: string;
    message?: string;
    timeSent?: Date = new Date();
}