import React from "react";
import { Text, Image, View, ScrollView, StyleSheet } from "react-native";

export default function App () {
   return (
      <>
      <Text style={styles.Logo}>
         GymSpot
      </Text>
      </>,


      <>
      <Text style={styles.name1}>
         미라클 짐
      </Text>
      <Text style={styles.users1}>
         실시간 이용 분포
      </Text>
      
      <Image
         style={styles.Image1}
         source={{ uri: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20221007_282%2F1665127011955LFsOC_JPEG%2FKakaoTalk_20221007_152208311_03.jpg" }}
      >
      </Image></>,


      <>
      <Text style={styles.name2}>
         웰스 핏
      </Text>
      <Text style={styles.users2}>
         실시간 이용 분포
      </Text>

      <Image
         style={styles.Image2}
         source={{ uri: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230206_231%2F1675657135263dyo36_JPEG%2F%25BF%25EB%25C0%25CE%25C3%25B3%25C0%25CE%25B1%25B8%25C7%25EF%25BD%25BA%25C0%25E5.jpg" }}
      >
      </Image></>,

      <>
      <Text style={styles.name3}>
         청담 피트니스
      </Text>
      <Text style={styles.users3}>
         실시간 이용 분포
      </Text>

      <Image
         style={styles.Image3}
         source={{ uri: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20191109_90%2F1573285377723gibFq_JPEG%2FYuHJFyWYtUz7VowZ768CCfVX.JPG.jpg" }}
      >
      </Image></>,

      <>
      <Text style={styles.name4}>
         머슬 인
      </Text>
      <Text style={styles.users4}>
         실시간 이용 분포
      </Text>

      <Image
         style={styles.Image4}
         source={{ uri: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20171117_149%2F1510913227858EJb1p_JPEG%2FSTODW3dlWyBnjoXrlVbC8HhE.jpg" }}
      >
      </Image></>,

      <>
      <Text style={styles.name5}>
         데일리 핏
      </Text>
      <Text style={styles.users5}>
         실시간 이용 분포
      </Text>

      <Image
         style={styles.Image5}
         source={{ uri: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20221214_121%2F16710042296227OgwL_JPEG%2FKakaoTalk_20221107_181509393_02.jpg" }}
      >
      </Image></>,

      <>
      <Text style={styles.name6}>
         퍼펙트 짐
      </Text>
      <Text style={styles.users6}>
         실시간 이용 분포
      </Text>

      <Image
         style={styles.Image6}
         source={{ uri: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20150901_275%2F1441106876866lWwni_JPEG%2F156379557166947_1.jpeg" }}
      >
      </Image></>,

      <>
      <Text style={styles.name7}>
         비전 휘트니스
      </Text>
      <Text style={styles.users7}>
         실시간 이용 분포
      </Text>

      <Image
         style={styles.Image7}
         source={{ uri: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220722_137%2F1658465556732Nke9B_JPEG%2FKakaoTalk_20220722_135205280.jpg" }}
      >
      </Image></>
   );
}

const styles = StyleSheet.create({
   Logo: {
      position: "absolute",
      left: 26,
      top: 44,
      width: 115,
      color: "rgba(0, 0, 0, 1)",
      fontSize: 40,
      fontStyle: "normal",
      textAlign: "left"
   },
   
   
   
   
   Image1: {
      position: "absolute",
      left: 23,
      top: 127,
      borderRadius: 15,
      width: 150,
      height: 130,
   },
   name1: {
      position: "absolute",
      left: 195,
      top: 127,
      width: "100%",
      color: "rgba(0, 0, 0, 1)",
      fontSize: 24,
      fontStyle: "normal",
      textAlign: "left"
   },
   users1: {
      position: "absolute",
      left: 198,
      top: 179,
      width: 111,
      color: "rgba(0, 0, 0, 1)",
      fontSize: 14,
      fontStyle: "normal",
      letterSpacing: 0,
      textAlign: "left"
   },

   Image2: {
      position: "absolute",
      left: 26,
      top: 316,
      borderRadius: 15,
      width: 150,
      height: 130,
   },
   name2: {
      position: "absolute",
      left: 201,
      top: 316,
      width: 82,
      color: "rgba(0, 0, 0, 1)",
      fontSize: 24,
      fontStyle: "normal",
      textAlign: "left"
   },
   users2: {
      position: "absolute",
      left: 204,
      top: 368,
      width: 111,
      color: "rgba(0, 0, 0, 1)",
      fontSize: 14,
      fontStyle: "normal",
      letterSpacing: 0,
      textAlign: "left"
   },

   Image3: {

   },
   name3: {

   },
   users3: {

   },


   Image4: {

   },
   name4: {

   },
   users4: {

   },


   Image5: {

   },
   name5: {

   },
   users5: {

   },


   Image6: {

   },
   name6: {

   },
   users6: {

   },


   Image7: {

   },
   name7: {

   },
   users7: {

   },
});