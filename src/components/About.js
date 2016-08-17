import React from 'react'

export default () => (
  <div>
    <p className="lead">
      This is a demo of using statechart.js with React
    </p>

    <h2>Statechart.js</h2>
    <p>
      The statechart module provides a State object that is an implementation of a Harel Statechart.
    </p>

    <p>
      Statecharts are an improvement over state machines because they elegantly solve the state explosion
      problem that is common with state machines. They do this by adding two additional features to state
      machines - state clustering and concurrent states. State clustering provides an abstraction over
      lower level states where events can be handled and transitions made in one place instead of many.
      Concurrent states essentially allow multiple statecharts to operate independently. The presence of
      concurrent states means that the current state of a statechart is actually a vector of states whose
      length is not fixed.
    </p>

    <p>
      More information on statecharts is available here:
    </p>


    <a href="http://www.wisdom.weizmann.ac.il/~harel/papers/Statecharts.pdf">
      http://www.wisdom.weizmann.ac.il/~harel/papers/Statecharts.pdf
    </a>
    <br />
    <a href="http://www.wisdom.weizmann.ac.il/~harel/papers/Statecharts.History.pdf">
      http://www.wisdom.weizmann.ac.il/~harel/papers/Statecharts.History.pdf
    </a>
    <br />
    <a href="http://www.amazon.com/Constructing-User-Interface-Statecharts-Horrocks/dp/0201342782">
      http://www.amazon.com/Constructing-User-Interface-Statecharts-Horrocks/dp/0201342782
    </a>

    <h2>Transis</h2>

    <p>
      This demo uses Transis for application state management, however any state management library can be used with statecharts.
    </p>

    <p>
      Read more about transis here <a href="https://github.com/centro/transis">https://github.com/centro/transis</a>
    </p>

  </div>
)
