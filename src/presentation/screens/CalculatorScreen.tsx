import React from 'react';
import { Text, View } from 'react-native';
import { colors, styles } from '../../config/app-theme';
import { CalculatorBotton } from '../components/CalculatorBotton';
import { useCalculator } from '../hooks/useCalculator.1';


export const CalculatorScreen = () => {

  const {
    number,
    formula,
    buildNumber, 
    toggleSign, 
    clean, 
    deleteOperation, 
    prevNumber,
    divideOperation,
    subtractOperation,
    addOperation,
    multiplyOperation,
    calculateResult
  } = useCalculator();

  return (
    <><View style={styles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={styles.mainResult}>
            {formula}
          </Text>
            {
            (formula === prevNumber)
            ? <Text style={styles.subResult}></Text>
            :
          <Text
            adjustsFontSizeToFit
            numberOfLines={1} 
            style={styles.subResult}>
              {prevNumber}
          </Text>
          }
        
      </View>
    </View><View style={styles.row}>
        <CalculatorBotton onPress={clean} blackText label='C' color={colors.lightGray} />
        <CalculatorBotton onPress={toggleSign} blackText label='+/-' color={colors.lightGray} />
        <CalculatorBotton onPress={deleteOperation} blackText label='del' color={colors.lightGray} />
        <CalculatorBotton onPress={divideOperation} label='÷' color={colors.orange} />
      </View><View>
        <CalculatorBotton onPress={ () =>  buildNumber('7') } label='7' />
        <CalculatorBotton onPress={ () =>  buildNumber('8') } label='8' />
        <CalculatorBotton onPress={ () =>  buildNumber('9') } label='9' />
        <CalculatorBotton onPress={multiplyOperation} label='x' color={colors.orange} />
      </View><View>
        <CalculatorBotton onPress={ () =>  buildNumber('4') } label='4' />
        <CalculatorBotton onPress={ () =>  buildNumber('5') } label='5' />
        <CalculatorBotton onPress={ () =>  buildNumber('6') } label='6' />
        <CalculatorBotton onPress={subtractOperation} label='-' color={colors.orange} />
      </View><View>
        <CalculatorBotton onPress={ () =>  buildNumber('1')} label='1' />
        <CalculatorBotton onPress={ () =>  buildNumber('2')} label='2' />
        <CalculatorBotton onPress={ () =>  buildNumber('3')} label='3' />
        <CalculatorBotton onPress={addOperation} label='+' color={colors.orange} />
      </View><View>
        <CalculatorBotton onPress={ () => buildNumber('0')} label='0' doubleSize />
        <CalculatorBotton onPress={ () => buildNumber('.')} label='.' />
        <CalculatorBotton onPress={calculateResult} label='=' color={colors.orange} />
      </View></>
  );
};
