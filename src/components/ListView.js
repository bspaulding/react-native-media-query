import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Cell, Section, TableView } from 'react-native-tableview-simple';

const things = [...Array(100).keys()];

const ListView = ({ itemSelected = () => {} }) => (
	<ScrollView>
		<TableView>
			<Section>
				{things.map(i => (
					<Cell key={i} title={i} onPress={itemSelected.bind(null, i)}/>
				))}
			</Section>
		</TableView>
	</ScrollView>
);

export default ListView;
