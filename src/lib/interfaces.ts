interface StateTransition {
    target: string;
}

interface StateTransitions {
    [key: string]: StateTransition;
}

interface State {
    on: StateTransitions;
}

export interface States {
    [key: string]: State;
}