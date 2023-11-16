/* eslint-disable indent */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
interface HeaderBarProps {
    title?: string;
}
const HeaderBar: React.FC<HeaderBarProps> = ({ title }) => {
    return (
        <View style={styles.HeaderContainer}>
            {/* <GradientBGIcon
                name="menu"
                color={COLORS.primaryLightGreyHex}
                size={FONTSIZE.size_16}
            /> */}
            <Text style={styles.HeaderText}>{title}</Text>
            {/* <ProfilePic /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    HeaderContainer: {
        padding: SPACING.space_30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    HeaderText: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_20,
        color: COLORS.primaryWhiteHex,
    },
});

export default HeaderBar;

