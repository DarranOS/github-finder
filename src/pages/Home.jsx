import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'

function Home() {
  return (
    <>
      {/* SEARCH RESULTS */}
      <UserSearch />
      <UserResults />
    </>
  )
}

export default Home
