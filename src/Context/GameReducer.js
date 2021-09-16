const type = {
    activeUser: "activeUser",
    activeQuestions: "activeQuestions",
    activePoints: "activePoints",
    level: "level",
    finishGame: "finishGame",
    resetTime: "resetTime"
}
const GameReducer = (state, action) => {
    switch (action.type) {
        case type.activeUser:
            return {
                ...state,
                userData: action.payload
            }
        case type.activeQuestions:
            return {
                ...state,
                questions: action.payload
            }

        case type.activePoints:
            return {
                ...state,
               
                points: action.payload
            }
        case type.level:
            return {
                ...state,
                level: action.payload
            }
        case type.resetTime:
            return {
                ...state,
                timer: action.payload
            }

        case type.finishGame:
            return {
                ...state,
                gameOver: action.payload
            }
        default:
            return state;
    }
};

export { type };
export default GameReducer;