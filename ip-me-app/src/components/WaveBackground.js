import React from 'react'
import Wave from "react-wavify"
const WaveBackground = () => {
  return (
    <div>
      <Wave className="h-screen absolute"
        fill='#07B1BC'
        paused={false}
        options={{
          height: 240,
          amplitude: 60,
          speed: 0.30,
          points: 2
        }}
      />
      <Wave className="h-screen absolute"
        fill='#0492C2'
        paused={false}
        options={{
          height: 250,
          amplitude: 45,
          speed: 0.20,
          points: 6
        }}
      />
      <Wave className="h-screen absolute"
        fill='#1277b0'
        paused={false}
        options={{
          height: 265,
          amplitude: 40,
          speed: 0.20,
          points: 4
        }}
      />
    </div>
  )
}

export default WaveBackground