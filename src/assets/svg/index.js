import React from 'react';
import { ReactComponent as LogoComp } from './logo.svg';
import { ReactComponent as SearchComp } from './search.svg';
export const Logo = props => {
	return <LogoComp {...props} />;
};
export const Google = props => {
	return <SearchComp {...props} />;
};
