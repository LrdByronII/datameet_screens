import { useEffect, useState } from 'react'
import { Merch } from '../componenets/MerchPage';

const useDMStats = () => {
    const [data, setData] = useState<Merch[]>([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    setIsLoading(true)

    const merchDisplayItems = [
    
  ] as Merch[];

  useEffect(() => {
    setData(merchDisplayItems)
    setError('')
    setIsLoading(false)
  }, [])

  return { data, error, isLoading }
}

export default useDMStats