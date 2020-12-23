import React from 'react';
import { ReactComponent as LogoComp } from './logo.svg';
import { ReactComponent as SearchComp } from './search.svg';
import { ReactComponent as GearComp } from './gear.svg';
import { ReactComponent as CameraComp } from './dslr-camera.svg';
export const Logo = props => {
	return <LogoComp {...props} />;
};
export const Google = props => {
	return <SearchComp {...props} />;
};
export const Gear = props => {
	return <GearComp {...props} />;
};
export const Camera = props => {
	return <CameraComp {...props} />;
};
