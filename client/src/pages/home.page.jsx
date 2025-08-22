import React,{useState,useEffect} from 'react'
import NavBar from '../components/navBar.component'
import MoodCard from '../components/moodCard.component'
import MessageCard from '../components/messageCard.components'

const API_URL = import.meta.env.VITE_API_URL;

export default function Home() {
  const [selectedMood, setSelectedMood] = useState(null)
  const [loading, setLoading] = useState(false)
  const [suggestions, setSuggestions] = useState([])
  const [error, setError] = useState(null);
  const [moodList, setMoodList] = useState([])

  const [ isMobile, setIsMobile]=useState(false);
  const [visibleCount, setvisiblecount]=useState(4)
 
  useEffect(()=>{
    const onResize=()=> setIsMobile(window.innerWidth < 640)
    onResize()
    window.addEventListener('resize',onResize)
    return ()=> window.removeEventListener('resize',onResize)
  },[])

  useEffect(() => {
    ;(async () => {
      try {
        const res = await fetch(`${API_URL}/api/moods`)
        const data = await res.json()
        setMoodList(data.moodList || [])
      } catch (err) {
        console.log(err)
      }
    })()
  }, [])
  const getMoodId = (label) => {
    const m = moodList.find(x => (x.mood_name || '').toLowerCase() === label.toLowerCase())
    return m?.id
  }

  const moods = [
    { key: 'happy', label: 'Happy', emoji: '😊' },
    { key: 'stressed', label: 'Stressed', emoji: '😵‍💫' },
    { key: 'bored', label: 'Bored', emoji: '😋' },
    { key: 'sad', label: 'sad', emoji: '😔' },
    { key: 'Romantic', label: 'Romantic', emoji: '😍' },
  ]

  const pickMood = async (m) => {
    setSelectedMood(m.key)
    setLoading(true)
    setError(null)
    setSuggestions([])
    const id = getMoodId(m.label)
    if (!id) {
      setLoading(false)
      setError('Mood not found')
      return
    }
    try {
      const res = await fetch(`${API_URL}/api/suggestions/${id}`)
      if (!res.ok) throw new Error('Failed')
      const data = await res.json()
      setSuggestions(data.food_suggestion || [])
    } catch (error) {
      console.log(error)
      setError('Could not load suggestions')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen w-full dark:bg-dark-background bg-light-background'>
      <NavBar />

      <main className='max-w-7xl mx-auto px-4'>
        {/* Hero */}
        <section className='text-center py-10'>
          <h1 className='font-chewy text-4xl md:text-5xl dark:text-dark-primary text-light-primary'>
            Match your mood to your food <span aria-hidden>🍽️</span>
          </h1>
          <p className='mt-3 text-light-accent dark:text-dark-accent'>
            Pick a mood. Get a plate. Feel better.
          </p>
        </section>

        {/* Mood Picker */}
        <section className='py-4'>
          <h2 className='mb-4 font-semibold text-lg dark:text-dark-primary text-light-primary'>
            How are you feeling today? <span title='mood'>😊</span>
          </h2>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6'>
            {moods.map((m) => (
              <button
                key={m.key}
                onClick={() => pickMood(m)}
                aria-label={`Select mood ${m.label}`}
                className='mx-auto transition transform hover:scale-[1.02] active:scale-[0.98]'
              >
                <MoodCard
                selected={selectedMood===m.key}
                  image={<span className='text-5xl select-none'>{m.emoji}</span>}
                />
                <p className='mt-2 text-center text-sm text-light-accent dark:text-dark-accent'>
                  {m.label}
                </p>
              </button>
            ))}
          </div>
        </section>

        {/* Suggestions (placeholder) */}
        <section className='py-8'>
          <h2 className='mb-4 font-semibold text-lg dark:text-dark-primary text-light-primary'>
            Suggestions for you
          </h2>
          {error && (
            <MessageCard type='error' title='Error' subtitle={error} />
          )}

          {loading && (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              {[1,2,3].map(k => (
                <div key={k} className='rounded-xl border border-gray-200 dark:border-gray-700 p-4 animate-pulse h-40 bg-light-card dark:bg-dark-card' />
              ))}
            </div>
          )}

          {!loading && !error && suggestions.length > 0 && (
            <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              {suggestions.slice(0,isMobile ? visibleCount : suggestions.length).map(food => (
                <div key={food.id} className='rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden bg-light-card dark:bg-dark-card'>
                  <img src={food.food_image} alt={food.food_name} className='w-full h-40 object-cover' />
                  <div className='p-3'>
                    <p className='font-semibold dark:text-dark-primary text-light-primary'>{food.food_name}</p>
                    {food.category && (
                      <p className='text-sm text-light-accent dark:text-dark-accent'>{food.category}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {isMobile && visibleCount < suggestions.length && (
              <div className='mt-4 flex justify-center sm:hidden'>
                <button onClick={()=>setvisiblecount(v=>Math.min(v + 4, suggestions.length))} className='px-4 py-2 rounded-lg text-white bg-light-primary-button hover:bg-light-primary-buttonhover dark:bg-dark-primary-button dark:hover:bg-color-dark-primary-buttonhover transition'>load more</button>
              </div>
            )}
            </>
            
          )}

          
        </section>
      </main>
    </div>
  )
}