/* eslint-disable indent */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { BORDERRADIUS, SPACING } from '../theme/theme';
import CustomIcon from './CustomIcon';

interface BGIconProps {
    name: string;
    color: string;
    size: number;
    BGColor: string;
}

const BGIcon: React.FC<BGIconProps> = ({ name, color, size, BGColor }) => {
    return (
        <View style={[styles.IconBG, { backgroundColor: BGColor }]}>
            <CustomIcon name={name} color={color} size={size} />
        </View>
    );
};

const styles = StyleSheet.create({
    IconBG: {
        height: SPACING.space_30,
        width: SPACING.space_30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: BORDERRADIUS.radius_8,
    },
});

export default BGIcon;