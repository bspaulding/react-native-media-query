import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MediaQuery from './MediaQuery';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		flex: 1
	},
	master: {
		flex: 1
	},
	detail: {
		flex: 1
	}
});

const MasterDetail = ({ renderMaster, renderDetail }) => (
	<View style={styles.container}>
		<View style={styles.master}>
			{renderMaster()}
		</View>
		<MediaQuery kind='min' width={376}>
			<View style={styles.detail}>
				{renderDetail()}
			</View>
		</MediaQuery>
	</View>
);

export default MasterDetail;
