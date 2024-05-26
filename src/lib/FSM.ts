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

// Define a Finite State Machine (FSM) class
class FSM {
  private currentState: string;
  private states: States;

  constructor(initialState: string, states: States) {
    this.currentState = initialState;
    this.states = states;
  }

  // Dispatch an event in the FSM
  dispatch(event: string) {
    // Get the configuration of the current state
    const currentStateConfig = this.states[this.currentState];
    // Get the configuration of the next state based on the dispatched event
    const nextStateConfig = currentStateConfig.on[event]

    // If the dispatched event is not handled in the current state, throw an error
    if (!nextStateConfig) {
      throw new Error(`Event '${event}' not handled in state '${this.currentState}'`);
    }

    // Transition to the next state
    this.currentState = nextStateConfig.target;
  }

  getState() {
    return this.currentState;
  }
}

export default FSM;

