import PropTypes from 'prop-types'
import RepoItem from './RepoItem'

function RepoList({ repos }) {
  return (
    <>
        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </>
  )
}

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
}

export default RepoList
