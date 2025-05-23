import { StyleSheet } from 'react-native';
import {
  tintColorBackGround,
  tintColorBlack,
  tintColorGreenDark,
  tintColorWhite,
} from '../constants/colors';

export const servicosStyle = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: tintColorBackGround,
  },
  card: {
    backgroundColor: tintColorWhite,
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    elevation: 5,
    shadowColor: tintColorBlack,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    overflow: 'hidden',
    flex: 1,
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
    padding: 12,
    backgroundColor: tintColorGreenDark,
    borderRadius: 12,
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: tintColorWhite,
    marginLeft: 8,
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  body: {
    fontSize: 18,
    color: tintColorBlack,
    lineHeight: 24,
    textAlign: 'justify',
  },

  bodyText: {
    fontSize: 18,
    color: tintColorBlack,
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: 12,
  },

  subtitle: {
    color: 'white',
    fontSize: 18,
    marginTop: 10,
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  iconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  content: {
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'justify',
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'flex-end',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  footerText: {
    fontSize: 14,
    textAlign: 'center',
  },
});
