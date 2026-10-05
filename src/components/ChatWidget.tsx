import { FormEvent, useState } from 'react'
import './ChatWidget.css'

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault()

  const formData = new FormData(event.currentTarget)

  const name = String(formData.get('name') || '').trim()
  const email = String(formData.get('email') || '').trim()
  const message = String(formData.get('message') || '').trim()

  if (!name || !email || !message) {
    return
  }

  const subject = `A note from ${name}`

  const body = [
    `Hi Jedidah,`,
    '',
    message,
    '',
    `— ${name}`,
    email,
  ].join('\n')

  const mailto = `mailto:jedidahgithinji12@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

  window.location.href = mailto
}

  return (
    <>
      {!isOpen && (
        <button
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
            <p className="chat-intro">
              So… what brings you here?
            </p>

            <p className="chat-intro">
              Maybe you have a water problem you want to talk through.
              Maybe you have an idea. Maybe you read something I wrote
              and have something to say about it. Maybe you just have a question.
            </p>

            <p className="chat-intro">
              Or maybe you have absolutely no idea what you’re doing here.
              Honestly? Same sometimes.
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
                />
              </label>

              <label>
                Your email
                <input
                  type="email"
                  name="email"
                  placeholder="Where can I find you?"
                   required
                />
              </label>

              <label>
                What’s on your mind?
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Go on. I’m listening."
                   required
                />
              </label>

              <button type="submit" className="chat-submit">
                Okay, tell me →
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default ChatWidget