import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/check-inbox')({
  component: CheckInbox,
})

function CheckInbox() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-light-grey p-4">
      <div className="mb-2">
        <img src="/public/icons8-email-100.png" alt="Email Icon" />
      </div>
      <h1 className="text-2xl font-bold mb-4">Check Your Inbox</h1>
      <p className="text-gray-600 text-center max-w-md">
        We’ve sent you an email with a link to continue. Please check your inbox
        and follow the instructions.
      </p>
    </div>
  )
}
