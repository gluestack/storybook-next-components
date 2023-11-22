import React from 'react';
import {
  HStack,
  Icon,
  Text,
  VStack,
  Pressable,
  Divider,
  Box,
  LockIcon,
  ChevronRightIcon,
} from '@gluestack-ui/themed';
import DashboardLayout from '../Layouts/DashboardLayout';
import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { Book, Home, User } from 'lucide-react-native';
import MobileFooter from '../components/MobileFooter';

type RootStackParamList = {
  Home: undefined;
  Syllabus: undefined;
  Test: undefined;
  Subscribe: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
type Props = StackScreenProps<RootStackParamList, 'Home'>;
type SyllabusNavigationProp = Props['navigation'];

type Icon = {
  iconName: any;
  iconText: keyof RootStackParamList;
};

const footerIcons: Icon[] = [
  { iconName: Home, iconText: 'Home' },
  { iconName: Book, iconText: 'Syllabus' },
  { iconName: LockIcon, iconText: 'Test' },
  { iconName: User, iconText: 'Subscribe' },
];
type Course = {
  name: string;
  number: string;
  iconName: any;
};
const course: Course[] = [
  {
    name: 'PSIR Optional',
    number: '35 Courses',
    iconName: ChevronRightIcon,
  },
  {
    name: 'Public Administration Optional ',
    number: '35 Courses',
    iconName: ChevronRightIcon,
  },
  {
    name: 'Sociology Optional',
    number: '35 Courses',
    iconName: ChevronRightIcon,
  },
  {
    name: 'History Optional',
    number: '35 Courses',
    iconName: ChevronRightIcon,
  },
  {
    name: 'Geological Optional',
    number: '35 Courses',
    iconName: ChevronRightIcon,
  },
  {
    name: 'Political Optional',
    number: '35 Courses',
    iconName: ChevronRightIcon,
  },
  {
    name: 'PSIR Optional',
    number: '35 Courses',
    iconName: ChevronRightIcon,
  },

  {
    name: 'Political Optional',
    number: '35 Courses',
    iconName: ChevronRightIcon,
  },
  {
    name: 'PSIR Optional',
    number: '35 Courses',
    iconName: ChevronRightIcon,
  },
];

function SyllabusCard({ name, number, iconName }: Course) {
  return (
    <>
      <Pressable
        sx={{
          '@md': { rounded: '$md' },
          '_light': {
            ':hover': { bg: '$backgroundLight100' },
            ':active': { bg: '$backgroundLight200' },
          },
          '_dark': {
            ':hover': { bg: '$backgroundDark700' },
            ':active': { bg: '$backgroundDark600' },
          },
        }}
        px="$4"
        py="$2"
        onPress={() => {}}
        justifyContent="space-between"
        alignItems="center"
        flexDirection="row"
      >
        <Box>
          <Text fontWeight="$medium" fontSize="$md">
            {name}
          </Text>
          <Text fontSize="$xs">{number}</Text>
        </Box>
        <Icon as={iconName} size="md" color="$textLight400" />
      </Pressable>
    </>
  );
}

function SyllabusList() {
  return (
    <Box mt="$3" pb="$16" sx={{ '@md': { mt: '$4', pb: '$0' } }}>
      {course.map((item, index) => {
        return <SyllabusCard key={index} {...item} />;
      })}
    </Box>
  );
}

function CourseType() {
  return (
    <VStack space="xs" px="$4" marginBottom="$5" sx={{ '@md': { mb: '$6' } }}>
      <Text
        color="$textLight500"
        letterSpacing="$lg"
        fontSize="$sm"
        sx={{
          '@md': { fontSize: '$md' },
          '_dark': { color: '$textDark400' },
        }}
      >
        Subscribe and access
      </Text>
      <Text
        color="$textLight800"
        sx={{ '_dark': { color: '$textDark50' }, '@md': { fontSize: '$lg' } }}
      >
        Complete UPSC CSE - Optional
      </Text>
      <Text
        color="$textLight800"
        sx={{ '_dark': { color: '$textDark50' }, '@md': { fontSize: '$lg' } }}
      >
        Syllabus with Structured Course
      </Text>
    </VStack>
  );
}

function TutorSyllabusScreen({ navigation }: { navigation: SyllabusNavigationProp }) {
  return (
    <>
      <DashboardLayout displaySidebar={false} title="Tutor Syllabus">
        <Box
          pt="$5"
          pb="$4"
          sx={{
            '@md': { pt: '$8', pb: '$6', px: '$4', rounded: '$sm' },
            '_dark': { bg: '$backgroundDark800' },
          }}
          bg="$backgroundLight0"
        >
          <CourseType />
          <Divider
            bg="$backgroundLight200"
            sx={{ _dark: { bg: '$backgroundDark700' } }}
          />
          <SyllabusList />
        </Box>
      </DashboardLayout>
      <MobileFooter footerIcons={footerIcons} navigation={navigation} />
    </>
  );
}

export default function TutorSyllabus() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={TutorSyllabusScreen} />
        <Stack.Screen name="Syllabus" component={TutorSyllabusScreen} />
        <Stack.Screen name="Test" component={TutorSyllabusScreen} />
        <Stack.Screen name="Subscribe" component={TutorSyllabusScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
