import { DateTime, Duration } from 'ts-luxon'
import { Outer } from './styled'
import { useEffect, useState } from 'react'

type Props = {
  startedAt?: DateTime
  endedAt?: DateTime
}

const DURATION_ZERO = Duration.fromMillis(0)

const Timer = ({ startedAt, endedAt }: Props) => {
  const [elapsedTime, setElapsedTime] = useState<Duration>(DURATION_ZERO)

  useEffect(() => {
    if (!startedAt) return setElapsedTime(DURATION_ZERO)
    if (startedAt && endedAt) {
      return setElapsedTime(endedAt.diff(startedAt))
    }
    // Update the elapsed time every second if the timer is running
    const interval = setInterval(() => {
      const now = DateTime.now()
      // Ensure startedAt is valid and calculate duration
      const duration = now.diff(startedAt)
      setElapsedTime(duration < DURATION_ZERO ? DURATION_ZERO : duration)
    }, 1000)

    return () => clearInterval(interval) // Cleanup on unmount
  }, [endedAt, startedAt])

  return <Outer>{elapsedTime?.toFormat('hh:mm:ss')}</Outer>
}

export default Timer
