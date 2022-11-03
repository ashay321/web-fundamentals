import React from 'react';
import {
    Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';




const SignupForm = ({ navigation }) => {
  const [name, onChangeName] = React.useState(null);
  const [email, onChangeEmail] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);
  const [emailValidError, onChangeEmailValidError] = React.useState('');
  const [passwordVisibility, onChangePasswordVisibility] = React.useState(true);

    const handleValidEmail = val => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    
        if (val.length === 0) {
            onChangeEmailValidError('email address must be entered');
        } else if (reg.test(val) === false) {
            onChangeEmailValidError('enter valid email address');
        } else if (reg.test(val) === true) {
            onChangeEmailValidError('');
        }
    };

  return (

        <View style={styles.mainContainer}>

            <View>
                <Text style={styles.appTitle}> Todo App </Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.header}>
                    Sign Up 
                </Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeName}
                        value={name}
                        placeholder="Enter your name"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => {
                            onChangeEmail(value);
                            handleValidEmail(value);
                        }}
                        value={email}
                        placeholder="Your Email Id"
                    />
                </View>
                
                {emailValidError ? <Text style={styles.errorText}>{emailValidError}</Text> : null}
                
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangePassword}
                        value={password}
                        placeholder="Password"
                        secureTextEntry={passwordVisibility}
                    />
                    <TouchableWithoutFeedback
                        onPress={() => {onChangePasswordVisibility(!passwordVisibility)}}
                    >
                    <Image 
                        style={styles.tinyLogo}
                        source={{uri: 'https://static.thenounproject.com/png/205168-200.png'}}/>
                    </TouchableWithoutFeedback>
                    
                </View>
                
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress = {() => 
                        {}}
                    > 
                        <Text style={{color:'white'}}>Sign Up</Text>
                    </TouchableOpacity>

                    
                </View>
                
                <Text style={{textAlign:'center'}}>
                    Already have an account ?
                    <Text 
                        style={{color:'blue'}}
                        onPress={() =>
                            navigation.navigate('Login')}
                    > Login</Text>
                </Text>
                
            </View>
        </View>
  );
};

const styles = StyleSheet.create({
    appTitle: {
        color: 'black',
        fontSize: 30,
        textAlign: 'center'
    },
    mainContainer: {
        backgroundColor: 'grey',
        height: '100%',
        paddingTop: 30
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        // alignItems: 'center',
        marginTop: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: 'white',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        height:400
    },
    header: {
        fontSize: 20 ,
        textAlign: 'center',
        fontWeight: "bold"
    },
    buttonContainer: {
        // justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'blue',
        width: '100%',
        marginBottom: 20,
        marginTop: 60
    },
    button: {
        alignItems: "center",
        backgroundColor: "#994181",
        padding: 10,
        borderRadius:30,
        width: '100%'
      },
    input: {
        height: 40,
        // margin: 12,
        // borderWidth: 1,
        padding: 10,
        borderRadius: 40,
        width: '80%'
    },
    inputContainer: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        marginTop:10
    },
    errorText: {
        color: 'red'
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
});

export default SignupForm;
