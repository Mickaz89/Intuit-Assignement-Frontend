interface StateTransition {
    target: string;
  }

  interface StateTransitions {
    [key: string]: StateTransition ;
  }

  interface State {
    on: StateTransitions;
  }

  interface States {
    [key: string]: State;
  }

  class FSM {
    private currentState: string;
    private states: States;

    constructor(initialState: string, states: States) {
      this.currentState = initialState;
      this.states = states;
    }

    dispatch(event: string) {
      const currentStateConfig = this.states[this.currentState];
      const nextStateConfig = currentStateConfig.on[event]

      if (!nextStateConfig) {
        throw new Error(`Event '${event}' not handled in state '${this.currentState}'`);
      }

      this.currentState = nextStateConfig.target;
    }

    getState() {
      return this.currentState;
    }
  }

  export default FSM;
