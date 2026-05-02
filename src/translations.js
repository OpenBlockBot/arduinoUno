/* eslint-disable quote-props */
/* eslint-disable max-len */
/**
 * Translation file for this resouce.
 *
 * IMPORTANT:
 * - The "en" (English) section is automatically generated from source files.
 *   Do NOT modify the "en" section manually.
 * - Other language sections (e.g., "zh-cn", "zh-tw", "ja", etc.) should be
 *   manually translated by you.
 * - When you run the extraction script again, only the "en" section will be
 *   updated. Your manual translations in other languages will be preserved.
 *
 * Structure:
 * - interface: translations for name/description (used by GUI formatMessage)
 * - extensions: translations for extension blocks (used by VM formatMessage)
 * - blocks: translations for Blockly blocks (used by Blockly.Msg)
 */

export default {
    'interface': {
        'en': {
            'arduinoUno.description': 'A great board to get started with electronics and coding.'
        },
        'ru': {
            'arduinoUno.description': 'Отличная плата для начала работы с электроникой и программированием.'
        },
        'zh-cn': {
            'arduinoUno.description': '很好的电子编程入门控制板。'
        },
        'zh-tw': {
            'arduinoUno.description': '很好的電子編程入門控制板。'
        }
    },
    'extensions': {
        'en': {
            'arduinoUno.modeMenu.input': 'input',
            'arduinoUno.modeMenu.output': 'output',
            'arduinoUno.modeMenu.inputPullup': 'input-pullup',
            'arduinoUno.levelMenu.high': 'high',
            'arduinoUno.levelMenu.low': 'low',
            'arduinoUno.InterrupModeMenu.risingEdge': 'rising edge',
            'arduinoUno.InterrupModeMenu.fallingEdge': 'falling edge',
            'arduinoUno.InterrupModeMenu.changeEdge': 'change edge',
            'arduinoUno.InterrupModeMenu.low': 'low',
            'arduinoUno.eolMenu.warp': 'warp',
            'arduinoUno.eolMenu.noWarp': 'no-warp',
            'arduinoUno.dataTypeMenu.integer': 'integer',
            'arduinoUno.dataTypeMenu.decimal': 'decimal',
            'arduinoUno.dataTypeMenu.string': 'string',
            'arduinoUno.category.pins': 'Pins',
            'arduinoUno.pins.setPinMode': 'set pin [PIN] mode [MODE]',
            'arduinoUno.pins.setDigitalOutput': 'set digital pin [PIN] out [LEVEL]',
            'arduinoUno.pins.setPwmOutput': 'set pwm pin [PIN] out [OUT]',
            'arduinoUno.pins.readDigitalPin': 'read digital pin [PIN]',
            'arduinoUno.pins.readAnalogPin': 'read analog pin [PIN]',
            'arduinoUno.pins.setServoOutput': 'set servo pin [PIN] out [OUT]',
            'arduinoUno.pins.attachInterrupt': 'attach interrupt pin [PIN] mode [MODE] executes',
            'arduinoUno.pins.detachInterrupt': 'detach interrupt pin [PIN]',
            'arduinoUno.category.serial': 'Serial',
            'arduinoUno.serial.serialBegin': 'serial begin baudrate [VALUE]',
            'arduinoUno.serial.serialPrint': 'serial print [VALUE] [EOL]',
            'arduinoUno.serial.serialAvailable': 'serial available data length',
            'arduinoUno.serial.serialReadAByte': 'serial read a byte',
            'arduinoUno.category.data': 'Data',
            'arduinoUno.data.dataMap': 'map [DATA] from ([ARG0], [ARG1]) to ([ARG2], [ARG3])',
            'arduinoUno.data.dataConstrain': 'constrain [DATA] between ([ARG0], [ARG1])',
            'arduinoUno.data.dataConvert': 'convert [DATA] to [TYPE]',
            'arduinoUno.data.dataConvertASCIICharacter': 'convert [DATA] to ASCII character',
            'arduinoUno.data.dataConvertASCIINumber': 'convert [DATA] to ASCII nubmer'
        },
        'ru': {
            'arduinoUno.modeMenu.input': 'ввод',
            'arduinoUno.modeMenu.output': 'вывод',
            'arduinoUno.modeMenu.inputPullup': 'ввод подтягивается к питанию',
            'arduinoUno.levelMenu.high': 'высокий',
            'arduinoUno.levelMenu.low': 'низкий',
            'arduinoUno.InterrupModeMenu.risingEdge': 'поднимающийся край',
            'arduinoUno.InterrupModeMenu.fallingEdge': 'падающий край',
            'arduinoUno.InterrupModeMenu.changeEdge': 'Изменить край',
            'arduinoUno.InterrupModeMenu.low': 'низкий',
            'arduinoUno.eolMenu.warp': 'перенос',
            'arduinoUno.eolMenu.noWarp': 'не переносить',
            'arduinoUno.dataTypeMenu.integer': 'целое',
            'arduinoUno.dataTypeMenu.decimal': 'десятичное',
            'arduinoUno.dataTypeMenu.string': 'строка',
            'arduinoUno.category.pins': 'Пины',
            'arduinoUno.pins.setPinMode': 'установить пин [PIN] режим [MODE]',
            'arduinoUno.pins.setDigitalOutput': 'установить цифровой пин [PIN] на [LEVEL]',
            'arduinoUno.pins.setPwmOutput': 'установить ШИМ пин [PIN] в [OUT]',
            'arduinoUno.pins.readDigitalPin': 'читать цифровой пин [PIN]',
            'arduinoUno.pins.readAnalogPin': 'читать аналоговый вывод [PIN]',
            'arduinoUno.pins.setServoOutput': 'установить серво пин [PIN] в [OUT]',
            'arduinoUno.pins.attachInterrupt': 'подключить прерывания на [PIN] в режиме [MODE] и выполнить',
            'arduinoUno.pins.detachInterrupt': 'отсоединить контакт прерывания [PIN]',
            'arduinoUno.category.serial': 'Серийный',
            'arduinoUno.serial.serialBegin': 'скорость последовательного порта [VALUE]',
            'arduinoUno.serial.serialPrint': 'В последовательный порт печатать [VALUE] [EOL]',
            'arduinoUno.serial.serialAvailable': 'доступная длина данных серийного порта',
            'arduinoUno.serial.serialReadAByte': 'Из последовательного порта прочитать байт',
            'arduinoUno.category.data': 'Данные',
            'arduinoUno.data.dataMap': 'сопоставить [DATA] с ([ARG0], [ARG1]) на ([ARG2], [ARG3])',
            'arduinoUno.data.dataConstrain': 'ограничить [DATA] между ([ARG0], [ARG1])',
            'arduinoUno.data.dataConvert': 'преобразовать [DATA] в [TYPE]',
            'arduinoUno.data.dataConvertASCIICharacter': 'преобразовать [DATA] в символ ASCII',
            'arduinoUno.data.dataConvertASCIINumber': 'преобразовать [DATA] в число ASCII'
        },
        'zh-cn': {
            'arduinoUno.modeMenu.input': '输入',
            'arduinoUno.modeMenu.output': '输出',
            'arduinoUno.modeMenu.inputPullup': '输入上拉',
            'arduinoUno.levelMenu.high': '高',
            'arduinoUno.levelMenu.low': '低',
            'arduinoUno.InterrupModeMenu.risingEdge': '上升沿',
            'arduinoUno.InterrupModeMenu.fallingEdge': '下降沿',
            'arduinoUno.InterrupModeMenu.changeEdge': '电平改变',
            'arduinoUno.InterrupModeMenu.low': '低电平',
            'arduinoUno.eolMenu.warp': '换行',
            'arduinoUno.eolMenu.noWarp': '不换行',
            'arduinoUno.dataTypeMenu.integer': '整数',
            'arduinoUno.dataTypeMenu.decimal': '小数',
            'arduinoUno.dataTypeMenu.string': '字符串',
            'arduinoUno.category.pins': '引脚',
            'arduinoUno.pins.setPinMode': '设置引脚 [PIN] 模式 [MODE]',
            'arduinoUno.pins.setDigitalOutput': '设置引脚 [PIN] 输出为 [LEVEL]',
            'arduinoUno.pins.setPwmOutput': '设置引脚 [PIN] pwm为 [OUT]',
            'arduinoUno.pins.readDigitalPin': '读取数字引脚 [PIN]',
            'arduinoUno.pins.readAnalogPin': '读取模拟引脚 [PIN]',
            'arduinoUno.pins.setServoOutput': '设置舵机引脚 [PIN] 输出 [OUT]',
            'arduinoUno.pins.attachInterrupt': '设置中断引脚 [PIN] 模式 [MODE] 执行',
            'arduinoUno.pins.detachInterrupt': '取消中断引脚 [PIN]',
            'arduinoUno.category.serial': '串口',
            'arduinoUno.serial.serialBegin': '串口启动波特率 [VALUE]',
            'arduinoUno.serial.serialPrint': '串口打印 [VALUE] [EOL]',
            'arduinoUno.serial.serialAvailable': '串口可读取字节数',
            'arduinoUno.serial.serialReadAByte': '串口读取1个字节',
            'arduinoUno.category.data': '数据',
            'arduinoUno.data.dataMap': '映射 [DATA] 从 ([ARG0], [ARG1]) 到 ([ARG2], [ARG3])',
            'arduinoUno.data.dataConstrain': '约束[DATA] 介于 ([ARG0], [ARG1])',
            'arduinoUno.data.dataConvert': '转换 [DATA] 为 [TYPE]',
            'arduinoUno.data.dataConvertASCIICharacter': '转换 [DATA] 为 ASCII 字符',
            'arduinoUno.data.dataConvertASCIINumber': '转换 [DATA] 为 ASCII 编码'
        },
        'zh-tw': {
            'arduinoUno.modeMenu.input': '輸入',
            'arduinoUno.modeMenu.output': '輸出',
            'arduinoUno.modeMenu.inputPullup': '輸入上拉',
            'arduinoUno.levelMenu.high': '高',
            'arduinoUno.levelMenu.low': '低',
            'arduinoUno.InterrupModeMenu.risingEdge': '上升沿',
            'arduinoUno.InterrupModeMenu.fallingEdge': '下降沿',
            'arduinoUno.InterrupModeMenu.changeEdge': '電位改變',
            'arduinoUno.InterrupModeMenu.low': '低',
            'arduinoUno.eolMenu.warp': '換行',
            'arduinoUno.eolMenu.noWarp': '不換行',
            'arduinoUno.dataTypeMenu.integer': '整數',
            'arduinoUno.dataTypeMenu.decimal': '小數',
            'arduinoUno.dataTypeMenu.string': '字串',
            'arduinoUno.category.pins': '腳位',
            'arduinoUno.pins.setPinMode': '設置腳位 [PIN] 模式 [MODE]',
            'arduinoUno.pins.setDigitalOutput': '設置腳位 [PIN] 輸出 [LEVEL]',
            'arduinoUno.pins.setPwmOutput': '設置 pwm 腳位 [PIN] 輸出 [OUT]',
            'arduinoUno.pins.readDigitalPin': '讀取數位腳位 [PIN]',
            'arduinoUno.pins.readAnalogPin': '讀取類比腳位 [PIN]',
            'arduinoUno.pins.setServoOutput': '設置舵機腳位 [PIN] 輸出 [OUT]',
            'arduinoUno.pins.attachInterrupt': '設置中斷腳位 [PIN] 模式 [MODE] 執行',
            'arduinoUno.pins.detachInterrupt': '取消中斷腳位 [PIN]',
            'arduinoUno.category.serial': '串口',
            'arduinoUno.serial.serialBegin': '串口啟動鮑率 [VALUE]',
            'arduinoUno.serial.serialPrint': '串口列印 [VALUE] [EOL]',
            'arduinoUno.serial.serialAvailable': '串口可讀取字節數',
            'arduinoUno.serial.serialReadAByte': '串口讀取1個字節',
            'arduinoUno.category.data': '數據',
            'arduinoUno.data.dataMap': '映射 [DATA] 從 ([ARG0], [ARG1]) 到 ([ARG2], [ARG3])',
            'arduinoUno.data.dataConstrain': '約束 [DATA] 介於 ([ARG0], [ARG1])',
            'arduinoUno.data.dataConvert': '轉換 [DATA] 為 [TYPE]',
            'arduinoUno.data.dataConvertASCIICharacter': '轉換 [DATA] 為 ASCII 字符',
            'arduinoUno.data.dataConvertASCIINumber': '轉換 [DATA] 為 ASCII 編碼'
        }
    },
    'blocks': {
        'en': {},
        'ru': {},
        'zh-cn': {},
        'zh-tw': {}
    }
};
