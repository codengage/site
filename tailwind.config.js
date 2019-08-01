module.exports = {
  theme: {
    fontFamily: {
      display: ['Myriad Pro', 'sans-serif'],
      body: ['Myriad Pro', 'sans-serif'],
      bold: ['Myriad Pro', 'sans-serif'],
      semibold: ['Myriad Pro', 'sans-serif']
    },
    fontSize: {
      '10': '10px',
      '12': '12px',
      '14': '14px',
      '16': '16px',
      '17': '17px',
      '18': '18px',
      '24': '24px',
      '26': '26px',
      '28': '28px',
      '34': '34px',
      '46': '46px',
      '48-97': '48.97px',
      '58': '58px',
      '78': '74.93px'
    },
    extend: {
      screens: {
        xs: '360px',
        xxl: '1440px'
      },
      colors: {
        black: {
          1: '#000000',
          2: '#000000F2', //95%
          3: '#040405',
          4: '#161615',
          5: '#121312',
          6: '#0C0C0D',
          7: '#0C0D0D',
          8: '#00000029', //16%
          9: '#0000001A' //10%
        },
        cian: {
          1: '#04BFCB',
          2: '#04BFCBF2', // 95%
          3: '#08C0CC',
          4: '#79DBE2',
          5: '#04BFCBFA', // 98%
        },
        white: '#FFFFFF',
        gray: {
          1: '#F5F5F5',
          2: '#E0E0E0',
          3: '#290000',
          4: '#7F7F7F'
        },
        red: {
          1: '#EB2226',
          2: '#fc999b',
        },
        green: {
          1: '#008000',
          2: '#91f891',
        },
      },
      spacing: {        
        '3px': '3px',//<  20
        '4px': '4px',
        '4-89px': '4.89px',
        '5px': '5px',
        '6px': '6px',
        '6-09px': '6.09px',
        '7px': '7px',
        '10px': '10px',
        '10-35px': '10.35px',
        '11px': '11px',
        '13px': '13px',
        '15px': '15px',
        '16px': '16px',
        '17px': '17px',
        '18px': '18px',
        '19px': '19px',
        '20px': '20px',//<  40
        '21px': '21px',
        '21-1px': '21.1px',
        '22px': '22px',
        '22-50px': '22.50px',
        '23px': '23px',
        '23-48px': '23.48px',
        '25px': '25px',
        '26px': '26px',
        '26-38px': '26.38px',
        '27px': '27px',
        '28px': '28px',
        '28-22px': '28.22px',
        '29px': '29px',
        '29-52px': '29.52px',
        '30px': '30px',
        '32px': '32px',
        '32-91px': '32.91px',
        '33-28px': '33.28px',
        '34px': '34px',
        '35px': '35px',
        '36-90px': '36.90px',
        '37px': '37px',
        '38px': '38px',
        '38-50px': '38.50px',
        '39-50px': '39.50px',
        '39-80px': '39.80px',
        '40px': '40px',//<  60
        '40-91px': '40.91px',
        '42-63px': '42.63px',
        '43px': '43px',
        '48px': '48px',
        '48-89px': '48.89px',
        '50px': '50px',
        '51px': '51px',
        '51-61px': '51.61px',
        '52px': '52px',
        '53-23px': '53.23px',
        '53-53px': '53.53px',
        '54px': '54px',
        '54-14px': '54.14px',
        '55px': '55px',
        '56px': '56px',
        '57-82px': '57.82px',
        '58px': '58px',
        '59px': '59px',
        '59-75px': '59.75px',
        '60px': '60px',//<  80
        '60-42px': '60.42px',
        '62px': '62px',
        '64px': '64px',
        '64-09px': '64.09px',
        '65px': '65px',
        '65-78px': '65.78px',
        '67px': '67px',
        '67-53px': '67.53px',
        '73px': '73px',
        '79px': '79px',
        '80px': '80px',//<  100
        '82px': '82px',
        '82-19px': '82.19px',
        '84-65px': '84.65px',
        '85px': '85px',
        '85-12px': '85.12px',
        '86px': '86px',
        '88-4px': '88.4px',
        '90px': '90px',
        '91px': '91px',
        '91-21px': '91.21px',
        '98-33px': '98.33px',
        '100px': '100px',//<  120
        '107px': '107px',
        '111-63px': '111.63px',
        '112-50px': '112.50px',
        '114px': '114px',
        '114-24px': '114.24px',
        '116px': '116px',
        '118px': '118px',
        '119px': '119px',
        '122-74px': '122.74px',//<  140
        '125-63px': '125.63px',
        '126px': '126px',
        '135px': '135px',
        '138-32px': '138.32px',
        '139-31px': '139.31px',
        '145-21px': '145.21px',//<  160
        '148px': '148px',
        '148-26px': '148.26px',
        '150px': '150px',
        '153-81px': '153.81px',
        '154px': '154px',
        '154-82px': '154.82px',
        '159px': '159px',
        '161px': '161px',//<  180
        '161-28px': '161.28px',
        '162px': '162px',
        '162-15px': '162.15px',
        '162-95px': '162.95px',
        '164-23px': '164.23px',
        '165px': '165px',
        '172-34px': '172.34px',
        '179-55px': '179.55px',
        '203px': '203px',//<  220
        '205-29px': '205.29px',
        '209-42px': '209.42px',
        '213px': '213px',
        '214-8px': '214.8px',
        '225px': '225px',
        '228-23px': '228.23px',//<  240
        '245px': '245px',//<  260
        '247px': '247px',
        '248-95px': '248.95px',
        '250-14px': '250.14px',
        '259-62px': '259.62px',
        '253px': '253px',        
        '264px': '264px',//<  280
        '268-98px': '268.98px',
        '269px': '269px',
        '275-67px': '275.67px',
        '280px': '280px',
        '288px': '288px',//<  300
        '290px': '290px',
        '292-83px': '292.83px',
        '296px': '296px',
        '297px': '297px',
        '298px': '298px',        
        '307px': '307px',//<  350
        '312px': '312px',
        '320px': '320px',
        '321px': '321px',        
        '341-79px': '341.79px',//< 400
        '350px': '350px',
        '357px': '357px',
        '357-74px': '357.74px',
        '358px': '358px',
        '369px': '369px',
        '391-13px': '391.13px',
        '395px': '395px',
        '405px': '405px',//< 450
        '428px': '428px',
        '430px': '430px',
        '431-8px': '431.8px',
        '432px': '432px',
        '434px': '434px',
        '438px': '438px',
        '452px': '452px',//< 500
        '453px': '453px',
        '456px': '456px',
        '469-18px': '469.18px',
        '471-37px': '471.37px',
        '487-86px': '487-86px',
        '496px': '496px',
        '519-78px': '519.78px',//< 550
        '541px': '541px',
        '546px': '546px',
        '546-11px': '546.11px',
        '551px': '551px',//< 600
        '559-16px': '559.16px',
        '574px': '574px',
        '574-05px': '574.05px',
        '581px': '581px',
        '630px': '630px',//< 650
        '662px': '662px',
        '663px': '663px',//< 700
        '677px': '677px',
        '702px': '702px',//< 800
        '710px': '710px',
        '711px': '711px',
        '734px': '734px',
        '734-38px': '734.38px',
        '743px': '743px',
        '746px': '746px',
        '817px': '817px',//< 900
        '822px': '822px',
        '848px': '848px',
        '862-52px': '862.52px',
        '894px': '894px',
        '889px': '889px',
        '931-38px': '931.38px',//> 1000
        '974px': '974px',
        '1025px': '1025px',
        '1060px': '1060px',
        '1065px': '1065px',
        '1110px': '1110px',
        '1111px': '1111px',
        '1221px': '1221px',
        '1455px': '1455px',
        '1674px': '1674px'
      },
      opacity: {
        '95': '0.95',
        '98': '0.98'
      },
      lineHeight: {
        105: 1.05,
        110: 1.1,
        115: 1.15,
        120: 1.2,
        125: 1.25,
        128: 1.28,
        130: 1.3,
        140: 1.4,
        145: 1.45
      },
      maxHeight: {
        '180': '180px'
      },
      minWidth: {
        '20': '20px'
      },
      maxWidth: {
        '150': '150px',
        '214-8': '214.8px',
        '245': '245px',
        '288': '288px',
        '320': '320px',
        '350': '350px',
        '366': '366px',
        '380': '380px',
        '424': '424px',
        '452': '452px',
        '480': '480px',
        '546': '546px',
        '677': '677px',
        '734': '734px',
        '817': '817px',
        '848': '848px',
        '980': '980px',
        '1025': '1025px',
        '1065': '1065px',
        '1110': '1110px'
      },
      inset: {
        '52': '52px',
        '0': '0 !important',
        '-100': '-100px',
        '-80': '-80px',
        '-32': '-32px',
        '-28': '-28px',
      },
      zIndex: {
        '1': '1'
      },
      boxShadow: {
        bottom: '0 4px 5px -3px rgba(0, 0, 0, .1)'
      },
    }
  },
  variants: {},
  plugins: [require('glhd-tailwindcss-transitions')()]
}
