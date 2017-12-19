import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

{
    type: ADD_COMMENT,
    text: 'My first comment !'
}

{
    type: REMOVE_COMMENT,
    id: 20
}

{
    type: EDIT_COMMENT,
    id: 20,
    text: 'wyedytowany tekst komentarza'
}

{
    type: THUMB_UP_COMMENT,
    id: 20,
    thumb: 'up'
}

{
    type: THUMB_DOWN_COMMENT,
    id: 20,
    thumb: 'down'
}

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
    }
}

function editComment(text, id) {
    return {
        type: EDIT_COMMENT,
        text,
    }
}

function thumbUpComment(id) {
    return {
        type: THUMB_UP_COMMENT,
    }
}

function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT, 
    }
}