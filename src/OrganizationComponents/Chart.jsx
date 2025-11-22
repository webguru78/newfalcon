import React from 'react'

const Chart = () => {
  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center",
      width: "100%" 
    }}>
      <img 
        src="/assets/img/chart.webp" 
        alt="chart" className='img-fluid'
        style={{ maxWidth: "100%", height: "auto" }} 
      />
    </div>
  )
}

export default Chart
