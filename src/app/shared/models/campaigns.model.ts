import { ClrLabel } from "@clr/angular";
import { title } from "process";

export const Campaigns = [
  {
    title: 'TEST', // orpg\src\campaigns에서 세션 로그가 들어있는 폴더 이름
    label: '로그 저장 예시들', // 저장소에서 표시할 캠페인 이름
    platform: 'roll20', // 롤20이면 "roll20", FVTT면 "FVTT"
    npcs: [
    ],
    logs: [
      {
        index: '1', // orpg\src\campaigns\TEST\logs 폴더 내에 있는 html 파일 이름
        name: '초급: 텍스트만 있는 로그 예시', // 저장소에서 표시할 파일 이름
        images: [
        ],
        interfaces: [
        ],
      },
      {
        index: '2',
        name: '중급: 이미지들이 있는 로그 예시',
        images: [
          {
            id: `-MmCF5jLjv067KaP9ySe`, // 롤20 로그 html에서 data-messageid 부분이다. 그 아래로 내려갈 시 아래에 적힌 이름의 이미지로 바뀐다.
            file: '0.jpg',
          },
          {
            id: `-MmCGcuT2mgqCKEL5vKq`,
            file: '1.jpg',
          },
          {
            id: `-MmCKFgB0sxdGVfuxgiQ`,
            file: '2.jpg',
          },
          {
            id: `-MmCKn2IzdH6zLT7P_I1`,
            file: '3.jpg',
          },
          {
            id: `-MmCOYHWotlGWmPiMpsV`,
            file: '4.jpg',
          },
        ],
        interfaces: [
        ],
      },
      {
        index: '3',
        name: '고급: 전투가 들어가는 로그 예시',
        images: [
          {
            id: `-MpZv1uY5JSFN1UO3WBY`,
            file: '0.jpg',
          },
          {
            id: `-MpZxQL9fRzEPKJX17ep`,
            file: '1.jpg',
          },
          {
            id: `-MpZyiQa6FKHlXfXWuUU`,
            file: '2.jpg',
          },
          {
            id: `-MpZyqPuK3mGTZ7GwdTA`,
            file: '3.jpg',
          },
          {
            id: `-Mp_-SkTvBeRra5rzsOG`,
            file: '4.jpg',
          },
          {
            id: `-Mp_7MQBPsSeruZ2KpBq`,
            file: '5.jpg',
          },
          {
            id: `-Mp_8A0YE76Q1XRW8g9p`,
            file: '6.jpg',
          },
          {
            id: `-Mp_8LP2XB59Bxvb23DS`,
            file: '7.jpg',
          },
          {
            id: `-Mp_9FFgYlEQs7y1HLKI`,
            file: '8.jpg',
          },
          {
            id: `-Mp_9a-BRuspeOitADI-`,
            file: '9.jpg',
          },
          {
            id: `-Mp_9jmC96cmfuxXCljx`,
            file: '10.jpg',
          },
          {
            id: `-Mp_9xqd4_Ec9EM5AXpO`,
            file: '11.jpg',
          },
          {
            id: `-Mp_A6KbvaWJqUiPBaDv`,
            file: '12.jpg',
          },
          {
            id: `-Mp_AGiBojPaQgFWqtJT`,
            file: '13.jpg',
          },
          {
            id: `-Mp_ASKhHR9SMWTB49Cy`,
            file: '14.jpg',
          },
          {
            id: `-Mp_AoQmswAw05VrUTZw`,
            file: '15.jpg',
          },
          {
            id: `-Mp_Bcgzt8XAeAOT__Kv`,
            file: '16.jpg',
          },
          {
            id: `-Mp_BquUCGffrZZpD_kV`,
            file: '17.jpg',
          },
          {
            id: `-Mp_C0j6FVs3z4QnA2AS`,
            file: '18.jpg',
          },
          {
            id: `-Mp_CoGfRiAeZszLWb_H`,
            file: '19.jpg',
          },
          {
            id: `-Mp_Ct5_ZWK8LtJYKuZA`,
            file: '20.jpg',
          },
          {
            id: `-Mp_D1F7L4M-Nk9yRs7f`,
            file: '21.jpg',
          },
          {
            id: `-Mp_DMvE77gWS6903nLr`,
            file: '22.jpg',
          },
          {
            id: `-Mp_D_OUjHPGSVuTRWy3`,
            file: '23.jpg',
          },
          {
            id: `-Mp_E7E3DINSSnHXRANK`,
            file: '24.jpg',
          },
          {
            id: `-Mp_EVM54ebcRniYLXOa`,
            file: '25.jpg',
          },
          {
            id: `-Mp_EfYr2efVMCNvE9EN`,
            file: '26.jpg',
          },
          {
            id: `-Mp_EyPhZAIhR7Vol5BN`,
            file: '27.jpg',
          },
          {
            id: `-Mp_FCiR2PgRgOyuj0SY`,
            file: '28.jpg',
          },
          {
            id: `-Mp_FmQFuWlEP2a37uXe`,
            file: '29.jpg',
          },
          {
            id: `-Mp_GIXT4Pr7j8vBsVtl`,
            file: '30.jpg',
          },
          {
            id: `-Mp_GSq9fh0ZSMoClMEJ`,
            file: '31.jpg',
          },
          {
            id: `-Mp_GzFiK9Xka22wa6jv`,
            file: '32.jpg',
          },
          {
            id: `-Mp_H8pcKDMo94OEi298`,
            file: '33.jpg',
          },
          {
            id: `-Mp_HbTgutLjEAxpwWO_`,
            file: '34.jpg',
          },
          {
            id: `-Mp_I-Iy08OvX42fszTU`,
            file: '35.jpg',
          },
          {
            id: `-Mp_I6CA55qzSEx44e2j`,
            file: '36.jpg',
          },
          {
            id: `-Mp_INAR5yUqb9jGFizR`,
            file: '37.jpg',
          },
          {
            id: `-Mp_IaRbUbHS69O9RjCS`,
            file: '38.jpg',
          },
          {
            id: `-Mp_Iioe6L0Dg9OUmr_a`,
            file: '39.jpg',
          },
          {
            id: `-Mp_IsHH1UZWIMcQPLbE`,
            file: '40.jpg',
          },
          {
            id: `-Mp_JAQOio-BFL17dk41`,
            file: '41.jpg',
          },
          {
            id: `-Mp_JZ6TWWZK8kzBrUJH`,
            file: '42.jpg',
          },
          {
            id: `-Mp_Jag82k6vcv2L5Yi8`,
            file: '43.jpg',
          },
          {
            id: `-Mp_KBbAAde3fbXh72us`,
            file: '44.jpg',
          },
          {
            id: `-Mp_Kgd5vXgOpYNKi-OT`,
            file: '45.jpg',
          },
          {
            id: `-Mp_Ko0AlWSKJrSI8b4C`,
            file: '46.jpg',
          },
          {
            id: `-Mp_KsRVdZ8pIYH_PBoZ`,
            file: '47.jpg',
          },
          {
            id: `-Mp_LGMQiPaZKorsaug7`,
            file: '48.jpg',
          },
          {
            id: `-Mp_LX2wC9vZl5ONmx6z`,
            file: '49.jpg',
          },
          {
            id: `-Mp_LtcoDVcUCn71QHt6`,
            file: '50.jpg',
          },
          {
            id: `-Mp_M0GG1XTF1ScEg1JK`,
            file: '51.jpg',
          },
          {
            id: `-Mp_M6qrZRxuRG8a5aDg`,
            file: '52.jpg',
          },
          {
            id: `-Mp_M_bG72TUkSnT9eNG`,
            file: '53.jpg',
          },
          {
            id: `-Mp_MpZm6FaxqhljCC0m`,
            file: '54.jpg',
          },
          {
            id: `-Mp_N5KimHbWt68G9iXf`,
            file: '55.jpg',
          },
          {
            id: `-Mp_NHOaCKlf2Ltiw3Vs`,
            file: '56.jpg',
          },
          {
            id: `-Mp_NUeTrrb3WWAFoOSz`,
            file: '57.jpg',
          },
          {
            id: `-Mp_N_jbrsBMEC1knb5-`,
            file: '58.jpg',
          },
          {
            id: `-Mp_Nc9_zdEeh0y20-Ua`,
            file: '59.jpg',
          },
          {
            id: `-Mp_NxayaNeYsFfiVMs1`,
            file: '60.jpg',
          },
          {
            id: `-Mp_O7wAdKyB-xgukurM`,
            file: '61.jpg',
          },
          {
            id: `-Mp_OOO5beczFoT5ddy8`,
            file: '62.jpg',
          },
          {
            id: `-Mp_P4Nq1-ynaPNhemeB`,
            file: '63.jpg',
          },
          {
            id: `-Mp_PQRzNR_K__VueHRu`,
            file: '64.jpg',
          },
          {
            id: `-Mp_Poe46RR2MsIsvW1W`,
            file: '65.jpg',
          },
          {
            id: `-Mp_Q3G8bSCido4vv57w`,
            file: '66.jpg',
          },
          {
            id: `-Mp_QQ2_rRI9Ilomfitj`,
            file: '67.jpg',
          },
          {
            id: `-Mp_Qyzp1cBy1NuFYd8R`,
            file: '68.jpg',
          },
          {
            id: `-Mp_R5noS-9mhZ2c_iem`,
            file: '69.jpg',
          },
          {
            id: `-Mp_RLS8uVP89xo4a8I7`,
            file: '70.jpg',
          },
          {
            id: `-Mp_RURl2RXOMdq8DADf`,
            file: '71.jpg',
          },
          {
            id: `-Mp_RkaFGaSmXcZ4ze87`,
            file: '72.jpg',
          },
          {
            id: `-Mp_RwsFySOGTJqSrKop`,
            file: '73.jpg',
          },
          {
            id: `-Mp_S6_Ylj8Z1f6yNuoX`,
            file: '74.jpg',
          },
          {
            id: `-Mp_Se78JC4K9nzrI1rf`,
            file: '75.jpg',
          },
          {
            id: `-Mp_SsSRApXJm-kIqYXA`,
            file: '76.jpg',
          },
          {
            id: `-Mp_T3Loix1GUQo9T2ki`,
            file: '77.jpg',
          },
          {
            id: `-Mp_T6hVRjnO36Bd9yJj`,
            file: '78.jpg',
          },
          {
            id: `-Mp_TX2NfCK5hP_H5gXA`,
            file: '79.jpg',
          },
          {
            id: `-Mp_U1nS40sCyRaHf035`,
            file: '80.jpg',
          },
          {
            id: `-Mp_UDEGzhLPe09bXhgV`,
            file: '81.jpg',
          },
          {
            id: `-Mp_UGrIPm105JG7fI0g`,
            file: '82.jpg',
          },
          {
            id: `-Mp_UMG8r5yDxfAhbtDk`,
            file: '83.jpg',
          },
          {
            id: `-Mp_UtdLc1v9mTVWDWP7`,
            file: '84.jpg',
          },
          {
            id: `-Mp_V5R_U6scGxTcJTfA`,
            file: '85.jpg',
          },
          {
            id: `-Mp_VYP_DZ5NVeQeJq3B`,
            file: '86.jpg',
          },
          {
            id: `-Mp_VyksP5ibFD6ErdFw`,
            file: '87.jpg',
          },
          {
            id: `-Mp_W60QZxuZJyjcfY9S`,
            file: '88.jpg',
          },
          {
            id: `-Mp_WDIhdjj0usFgmSXj`,
            file: '89.jpg',
          },
          {
            id: `-Mp_WT3tX-p0MhOzmajM`,
            file: '90.jpg',
          },
          {
            id: `-Mp_WkJftfQhQaOrxJbX`,
            file: '91.jpg',
          },
          {
            id: `-Mp_X2lOWopRS6992RHp`,
            file: '92.jpg',
          },
          {
            id: `-Mp_XclL2EVOVAeiXhEk`,
            file: '93.jpg',
          },
          {
            id: `-Mp_XoXFfe_rkPFHCGr-`,
            file: '94.jpg',
          },
          {
            id: `-Mp_YKOlxpMn17br-8TZ`,
            file: '95.jpg',
          },
          {
            id: `-Mp_YaMxn5sSnTHTEO4X`,
            file: '96.jpg',
          },
          {
            id: `-Mp_Ybw0ECR5jV-tWz2h`,
            file: '97.jpg',
          },
          {
            id: `-Mp_Yt1I9iMl9ML_IF5A`,
            file: '98.jpg',
          },
          {
            id: `-Mp_ZWtukleJ4GobW_8c`,
            file: '99.jpg',
          },
          {
            id: `-Mp_Zd5OyGs3gvgY1Pi_`,
            file: '100.jpg',
          },
          {
            id: `-Mp_ZjFydBSTnvtGG1Bx`,
            file: '101.jpg',
          },
          {
            id: `-Mp__3o0j3bW0kA2gnWg`,
            file: '102.jpg',
          },
          {
            id: `-Mp__9snBvXqWGHppGOs`,
            file: '103.jpg',
          },
          {
            id: `-Mp__KmFHKTAB8tHTb6i`,
            file: '104.jpg',
          },
          {
            id: `-Mp__VMn8LcLEkl-R7SX`,
            file: '105.jpg',
          },
          {
            id: `-Mp_c4wvPB8CtakuYXrF`,
            file: '3.jpg',
          },
          {
            id: `-Mp_dMxV90-sx1y6aRf1`,
            file: '2.jpg',
          },
          {
            id: `-Mp_e1ZM2c-NGJioT_XE`,
            file: '106.jpg',
          },
          {
            id: `-Mp_eKeIJYrClGCZeieg`,
            file: '107.jpg',
          },
          {
            id: `-Mp_hTiM069IyBgALEY7`,
            file: '106.jpg',
          },
          {
            id: `-Mp_kD0qCgB8ey2YrjYU`,
            file: '108.jpg',
          },
          {
            id: `-Mp_kee4610RAxGuPp4m`,
            file: '109.jpg',
          },
        ],
        interfaces: [
          {
            id: `-MpZv1uY5JSFN1UO3WBY`,
            file: '',
          },
          {
            id: `-Mp_7duQHYMAXs0dWk0z`,
            file: '0.png',
          },
          {
            id: `-Mp_8mK7APFYFNhQ5DlI`,
            file: '1.png',
          },
          {
            id: `-Mp_9SdecVc8jZvYib0q`,
            file: '2.png',
          },
          {
            id: `-Mp_AK1iq08ToKn5vgjd`,
            file: '3.png',
          },
          {
            id: `-Mp_Ab7yGv4X67inT6un`,
            file: '4.png',
          },
          {
            id: `-Mp_BOmNJmqYAZLsEALN`,
            file: '5.png',
          },
          {
            id: `-Mp_C8Dqbnv4yTNpfh0b`,
            file: '6.png',
          },
          {
            id: `-Mp_CHgrYsvt76F-o_I9`,
            file: '7.png',
          },
          {
            id: `-Mp_Cyi3SCAST9hp1NvE`,
            file: '8.png',
          },
          {
            id: `-Mp_DB1Bqc8919i2RrqQ`,
            file: '9.png',
          },
          {
            id: `-Mp_DgKN6W9U4m6WyR6z`,
            file: '10.png',
          },
          {
            id: `-Mp_ELjsvj8Nu-Wz5RdE`,
            file: '11.png',
          },
          {
            id: `-Mp_F4Dvgon0UbnpdXvf`,
            file: '0.png',
          },
          {
            id: `-Mp_GXcHZIT3dXiOi0tr`,
            file: '1.png',
          },
          {
            id: `-Mp_HDW1-hiHGqbDIb0O`,
            file: '2.png',
          },
          {
            id: `-Mp_ITCPIwb6bc-hFnfi`,
            file: '3.png',
          },
          {
            id: `-Mp_Iyxk5Cq2jsqDjdqK`,
            file: '4.png',
          },
          {
            id: `-Mp_Jr4nX5MXG-5U2her`,
            file: '5.png',
          },
          {
            id: `-Mp_KRRyVmlncWN3JwfV`,
            file: '6.png',
          },
          {
            id: `-Mp_KbNupWChc6J3KEQg`,
            file: '7.png',
          },
          {
            id: `-Mp_L6ujHH_3PKr_P6z3`,
            file: '8.png',
          },
          {
            id: `-Mp_LJbLb1_KdsQfvVTN`,
            file: '9.png',
          },
          {
            id: `-Mp_LyU4A9zOFMVCWVy4`,
            file: '10.png',
          },
          {
            id: `-Mp_MktC5ORN7CDT1IHX`,
            file: '11.png',
          },
          {
            id: `-Mp_NKOtfVfxzy4Qb2mE`,
            file: '0.png',
          },
          {
            id: `-Mp_OSNMgzN7vfA8o1HU`,
            file: '1.png',
          },
          {
            id: `-Mp_PC6Y2Ju1dGJ1_6Et`,
            file: '2.png',
          },
          {
            id: `-Mp_PwJnQIKvJ88o3qWS`,
            file: '3.png',
          },
          {
            id: `-Mp_QgcxJ5Jy85DTI0sV`,
            file: '4.png',
          },
          {
            id: `-Mp_Rc0hZicpoRdQLW98`,
            file: '5.png',
          },
          {
            id: `-Mp_TEBYBVwNAkpgM9kA`,
            file: '6.png',
          },
          {
            id: `-Mp_Tj6DlQ06Wapx6IMp`,
            file: '7.png',
          },
          {
            id: `-Mp_UJprIbMjDnHQuliG`,
            file: '8.png',
          },
          {
            id: `-Mp_USTLgAIFBVHkKZfA`,
            file: '9.png',
          },
          {
            id: `-Mp_V8UjmEAB4OMFzozW`,
            file: '10.png',
          },
          {
            id: `-Mp_W84hYCH4OmEsJbE_`,
            file: '11.png',
          },
          {
            id: `-Mp_WrOKUDKxFD4K_KEI`,
            file: '0.png',
          },
          {
            id: `-Mp_Y1HohD84LVzHKyB4`,
            file: '1.png',
          },
          {
            id: `-Mp_YPIbca8twxLzJIWa`,
            file: '2.png',
          },
          {
            id: `-Mp_YjLVdpUBKWYQIeD3`,
            file: '3.png',
          },
          {
            id: `-Mp_ZxRiclCX81yWI8Kv`,
            file: '4.png',
          },
          {
            id: `-Mp_a215xDGl4UYJGJ3V`,
            file: '',
          },
        ],
      },
    ]
  },
  {
    title: 'OBELISK',
    label: '오벨리스크 테스트',
    platform: 'roll20',
    npcs: [
      ],
    logs: [
    {
      index: '1',
      name: '판델버와 부서진 오벨리스크 1화',
      images: [
      ],
      interfaces: [
      ],
    },
   ],

  },
];

export interface Campaign {
  title: string;
  label: string;
  platform: string;
  npcs: NPC[];
  logs: Log[];
}

export interface NPC {
  name: string;
  avatar: string;
}

export interface Log {
  index: string;
  name: string;
  images?: Image[];
  interfaces?: Image[];
}

export interface Image {
  id: string;
  file: string;
}
