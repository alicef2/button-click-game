import React, {useState} from 'react'

type InanimateResourceProps = {
  wood?: number,
  stone?: number,
  iron?: number
}
export const InanimateResources = () => {
  const [resourceState, setResourceState] = useState<InanimateResourceProps>({})
  const handleClick = () => {
    if (resourceState.wood) {
      setResourceState({...resourceState, wood: resourceState.wood + 10})
    } else {
      setResourceState({...resourceState, wood: 10})
    }
  }
  return (
    <div className="App">
      <main>
        <button onClick={() => handleClick()}>tree befriending</button>
      </main>
      <div>
        <p>Resources:</p>
        <p>Wood: {resourceState.wood? resourceState.wood : 0}</p>
      </div>
    </div>
  );
}
