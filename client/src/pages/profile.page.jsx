import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/navBar.component'
import MessageCard from '../components/messageCard.components'
import {
  UserIcon,
  EnvelopeIcon,
  CalendarIcon,
  HeartIcon,
  Cog6ToothIcon,
  ArrowLeftEndOnRectangleIcon,
  BellIcon,
  ShieldCheckIcon,
  StarIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

function ProfilePage() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('profile')

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"))
    if (!storedUser) {
      navigate('page/signin')
      return
    }
    setUser(storedUser)
    setLoading(false)
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem("user")
    navigate('page/signin')
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getInitials = (name) => {
    return name?.split(' ').map(n => n[0]).join('').toUpperCase() || 'U'
  }

  if (loading) {
    return (
      <div className='min-h-screen w-full dark:bg-dark-background bg-light-background'>
        <NavBar />
        <div className='flex items-center justify-center h-64'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--color-light-primary)]'></div>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen w-full dark:bg-dark-background bg-light-background'>
      <NavBar />
      
      <main className='max-w-4xl mx-auto px-4 py-8'>
        {/* Profile Header */}
        <div className='bg-light-card dark:bg-dark-card rounded-2xl shadow-lg p-6 mb-8'>
          <div className='flex flex-col sm:flex-row items-center gap-6'>
            {/* Avatar */}
            <div className='relative'>
              <div className='w-24 h-24 rounded-full bg-gradient-to-br from-[var(--color-light-primary)] to-[var(--color-light-accent)] dark:from-[var(--color-dark-primary)] dark:to-[var(--color-dark-accent)] flex items-center justify-center text-white text-2xl font-bold'>
                {getInitials(user?.name)}
              </div>
              <div className='absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-dark-card'></div>
            </div>
            
            {/* User Info */}
            <div className='flex-1 text-center sm:text-left'>
              <h1 className='text-2xl font-bold dark:text-dark-primary text-light-primary mb-2'>
                {user?.name || 'User'}
              </h1>
              <p className='text-light-accent dark:text-dark-accent mb-1 flex items-center justify-center sm:justify-start gap-2'>
                <EnvelopeIcon className='w-4 h-4' />
                {user?.email}
              </p>
              <p className='text-light-accent dark:text-dark-accent flex items-center justify-center sm:justify-start gap-2'>
                <CalendarIcon className='w-4 h-4' />
                Member since {formatDate(user?.created_at || new Date())}
              </p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8'>
          <div className='bg-light-card dark:bg-dark-card rounded-xl p-4 shadow-md'>
            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center'>
                <HeartIcon className='w-5 h-5 text-orange-600 dark:text-orange-400' />
              </div>
              <div>
                <p className='text-sm text-light-accent dark:text-dark-accent'>Moods Tracked</p>
                <p className='text-xl font-bold dark:text-dark-primary text-light-primary'>12</p>
              </div>
            </div>
          </div>

          <div className='bg-light-card dark:bg-dark-card rounded-xl p-4 shadow-md'>
            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center'>
                <StarIcon className='w-5 h-5 text-purple-600 dark:text-purple-400' />
              </div>
              <div>
                <p className='text-sm text-light-accent dark:text-dark-accent'>Favorites</p>
                <p className='text-xl font-bold dark:text-dark-primary text-light-primary'>8</p>
              </div>
            </div>
          </div>

          <div className='bg-light-card dark:bg-dark-card rounded-xl p-4 shadow-md'>
            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center'>
                <ClockIcon className='w-5 h-5 text-blue-600 dark:text-blue-400' />
              </div>
              <div>
                <p className='text-sm text-light-accent dark:text-dark-accent'>This Week</p>
                <p className='text-xl font-bold dark:text-dark-primary text-light-primary'>5</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className='bg-light-card dark:bg-dark-card rounded-2xl shadow-lg overflow-hidden'>
          <div className='flex border-b border-gray-200 dark:border-gray-700'>
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex-1 px-6 py-4 text-sm font-medium transition-colors ${
                activeTab === 'profile'
                  ? 'text-[var(--color-light-primary)] dark:text-[var(--color-dark-primary)] border-b-2 border-[var(--color-light-primary)] dark:border-[var(--color-dark-primary)]'
                  : 'text-light-accent dark:text-dark-accent hover:text-light-primary dark:hover:text-dark-primary'
              }`}
            >
              Profile
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`flex-1 px-6 py-4 text-sm font-medium transition-colors ${
                activeTab === 'settings'
                  ? 'text-[var(--color-light-primary)] dark:text-[var(--color-dark-primary)] border-b-2 border-[var(--color-light-primary)] dark:border-[var(--color-dark-primary)]'
                  : 'text-light-accent dark:text-dark-accent hover:text-light-primary dark:hover:text-dark-primary'
              }`}
            >
              Settings
            </button>
          </div>

          <div className='p-6'>
            {activeTab === 'profile' && (
              <div className='space-y-6'>
                <div>
                  <h3 className='text-lg font-semibold dark:text-dark-primary text-light-primary mb-4'>
                    Personal Information
                  </h3>
                  <div className='space-y-4'>
                    <div className='flex flex-col sm:flex-row sm:items-center gap-2'>
                      <label className='text-sm font-medium text-light-accent dark:text-dark-accent w-24'>
                        Name:
                      </label>
                      <span className='text-light-primary dark:text-dark-primary'>
                        {user?.name || 'Not provided'}
                      </span>
                    </div>
                    <div className='flex flex-col sm:flex-row sm:items-center gap-2'>
                      <label className='text-sm font-medium text-light-accent dark:text-dark-accent w-24'>
                        Email:
                      </label>
                      <span className='text-light-primary dark:text-dark-primary'>
                        {user?.email || 'Not provided'}
                      </span>
                    </div>
                    <div className='flex flex-col sm:flex-row sm:items-center gap-2'>
                      <label className='text-sm font-medium text-light-accent dark:text-dark-accent w-24'>
                        Joined:
                      </label>
                      <span className='text-light-primary dark:text-dark-primary'>
                        {formatDate(user?.created_at || new Date())}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className='space-y-6'>
                <div>
                  <h3 className='text-lg font-semibold dark:text-dark-primary text-light-primary mb-4'>
                    Account Settings
                  </h3>
                  <div className='space-y-4'>
                    <button className='w-full flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors'>
                      <div className='flex items-center gap-3'>
                        <BellIcon className='w-5 h-5 text-light-accent dark:text-dark-accent' />
                        <span className='text-light-primary dark:text-dark-primary'>Notifications</span>
                      </div>
                      <ArrowLeftEndOnRectangleIcon className='w-4 h-4 text-light-accent dark:text-dark-accent' />
                    </button>

                    <button className='w-full flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors'>
                      <div className='flex items-center gap-3'>
                        <ShieldCheckIcon className='w-5 h-5 text-light-accent dark:text-dark-accent' />
                        <span className='text-light-primary dark:text-dark-primary'>Privacy</span>
                      </div>
                      <ArrowLeftEndOnRectangleIcon className='w-4 h-4 text-light-accent dark:text-dark-accent' />
                    </button>

                    <button className='w-full flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors'>
                      <div className='flex items-center gap-3'>
                        <Cog6ToothIcon className='w-5 h-5 text-light-accent dark:text-dark-accent' />
                        <span className='text-light-primary dark:text-dark-primary'>Preferences</span>
                      </div>
                      <ArrowLeftEndOnRectangleIcon className='w-4 h-4 text-light-accent dark:text-dark-accent' />
                    </button>

                    <button
                      onClick={handleLogout}
                      className='w-full flex items-center justify-between p-4 rounded-lg border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors'
                    >
                      <div className='flex items-center gap-3'>
                        <ArrowLeftEndOnRectangleIcon className='w-5 h-5 text-red-600 dark:text-red-400' />
                        <span className='text-red-600 dark:text-red-400 font-medium'>Logout</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default ProfilePage