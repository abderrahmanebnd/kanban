import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return <Button>Add this </Button>
}

//
//TODO begin by exploring how to do magic link registration and login with supabase
//TODO then add the ability to login/register a new user with google
//TODO create the database tables using supabase
//TODO create the login and register process and design
