
import { FormEvent, useState } from 'react'
import './ChatWidget.css'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mzedjpbd'

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState<
    'success' | 'error' | null
  >(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    setIsSubmitting(true)
    setSubmissionStatus(null)

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        form.reset()
        setSubmissionStatus('success')
      } else {
        setSubmissionStatus('error')
      }
    } catch {
      setSubmissionStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {!isOpen && (
        <button
          type="button"
          className="chat-trigger"
          onClick={() => setIsOpen(true)}
          aria-label="Open chat"
        >
          <span className="chat-trigger-icon">💬</span>
          <span>Talk to me</span>
        </button>
      )}

      {isOpen && (
        <div className="chat-widget">
          <div className="chat-header">
            <div>
              <span className="chat-kicker">YOU FOUND THE CHAT BOX</span>
              <h3>Hey. Who am I speaking with? 👋</h3>
            </div>

            <button
              type="button"
              className="chat-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          <div className="chat-body">
            <p className="chat-intro">So… what brings you here?</p>

            <p className="chat-intro">
              Need a hand with technical documentation, have a project
              you’d like to talk through, or think your organisation has
              a little Jed-shaped gap? You’re welcome to get in touch.
              I’m an email or phone call away, and I promise I don’t bite. :)
            </p>

            <p className="chat-intro">
              Maybe you have an idea, a question, or read something I
              wrote and have something to say about it. Or maybe you have
              absolutely no idea what you’re doing here. Honestly? Same
              sometimes.
            </p>

            <p className="chat-intro">
              Leave me a note. I’ll read it.
            </p>

            <form className="chat-form" onSubmit={handleSubmit}>
              <label>
                Who am I speaking with?
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  disabled={isSubmitting}
                />
              </label>

              <label>
                Your email
                <input
                  type="email"
                  name="email"
                  placeholder="Where can I find you?"
                  required
                  disabled={isSubmitting}
                />
              </label>

              <label>
                What’s on your mind?
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Go on. I’m listening."
                  required
                  disabled={isSubmitting}
                />
              </label>

              {submissionStatus === 'success' && (
                <p
                  className="chat-status chat-status-success"
                  role="status"
                  aria-live="polite"
                >
                  Your note is on its way. Thank you for stopping by. 🤍
                </p>
              )}

              {submissionStatus === 'error' && (
                <p
                  className="chat-status chat-status-error"
                  role="alert"
                >
                  Oh, that didn’t go through. Please try again in a moment.
                </p>
              )}

              <button
                type="submit"
                className="chat-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending…' : 'Okay, tell me →'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default ChatWidget
