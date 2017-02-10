/* @flow */

import React from 'react';
import MasterDetail from './MasterDetail';
import ListView from './ListView';
import DetailView from './DetailView';

const App = () => (
	<MasterDetail
		renderMaster={() => <ListView/>}
		renderDetail={() => <DetailView/>}
	/>
);

export default App;
