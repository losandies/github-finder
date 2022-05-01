import React from 'react';
import RepoItem from './RepoItem';
import PropTypes from 'prop-types';

const RepoList = ({ repos }) => {
	return (
		<div className="rounded-lg shadow-lg card bg-base-100">
			<div className="card-body">
				<h2 className="text-3xl my-f font-bold card-title">Top Repositories</h2>
				{repos.map((repo) => (
					<RepoItem key={repo.id} repo={repo} />
				))}
			</div>
		</div>
	);
};

RepoList.propTypes = {
	repos: PropTypes.array.isRequired,
};

export default RepoList;
