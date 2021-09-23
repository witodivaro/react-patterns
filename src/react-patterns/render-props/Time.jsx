const Time = ({ children }) => {
  const currentTime = Date.now();

  return children(currentTime)
}

export default Time
