// import "scandit-sdk";

// // const barcodePickerElement = document.getElementById("barcodePicker");
// // barcodePickerElement.addEventListener("scan", function (event) {
// //   const scanResult = event.detail;
// //   alert(
// //     scanResult.barcodes.reduce(function (string, barcode) {
// //       return (
// //         string +
// //         ScanditSDK.Barcode.Symbology.toHumanizedName(barcode.symbology) +
// //         ": " +
// //         barcode.data +
// //         "\n"
// //       );
// //     }, "")
// //   );
// //   console.log(scanResult);

// //   $.ajax({
// //     type: "POST",
// //     url: "/barcode",
// //     mydata: scanResult,
// //     success: function (response) {
// //       //do something with the response here
// //       console.log("send success to backend");
// //     },
// //   });
// //   // var filename = scanResult;

// //   // $("#temp_display").text(filename);
// //   // $("#my_file_name").val() = filename; //Add this line
// // });

// ScanditSDK.configure(
//   "AcNBaBp6OL7AKEDqMipZkFZAlsxfPT8weVaC9jJ02DqVdqHCh1LU65dtav7yVKwoQlsRyql63FJTfjeuLWgIl/1aYHQEQZN3jXPE+bBxqiNiKVIUwQlhz5QE5Fn1ODWgK42t2BrejN0VHjlX56G5/IW0CRKzmyLSsGrMYe3NSP9cX9dyCO7N0+JNtLg3sHPfsRNaS2XlzpKTEF6Fa8zxrKalWgrV+Pnf/FRitWJ8uMipbuwOlFHWEbmU+AvuEf+oU/UVteSLuWrD4tF4pu6orDZegifmUJe8UDUmHpNVwTDmmJqlhphDAwc5Yonw0G1/7ImPAQzuf9CtK3JvlYAif8ofkz3c0Kst+3snRdQKdUPOgfep1eg6V3485MDqzuctn8IIZsT39LDg+3pEfrjHZ8WvKKJ7b9LkQlVCjBCdGwzPAC70zf6ttSLLaPxp1JINC//gnkxEVzQTDzjFiFImyNtWtm0ebM8u6JeMUxmn2vN/lCECL++RXK90Ed6uRUpt0u/rFS0uyyyLfR6Gaj7HYQZtV2gK6RVxmdVcnfVvM0+4lizNxynRl13hp+IFNBeH0+OkNp37onFOKR5+xnWp1N7f4vU52GgvZoYf5HYoIRv3hPASHf+8pMzT8f9GPkSoeJUcv6E7DtQRUC6ak4V46E28LZu47w9M5irVQX8ZKuOwlLOAmiqDXDwZwImi3/CfruL83ZyPW+GQiH+NpvybzKMCZBIoecrwtRHEzPwcsYHmnx/9RcWa1gJglL/JUUv2xS2T1U7CI3WL86dzpofGZNrjzVAPtThge8JrtpmzdA==",
//   {
//     // engineLocation: "https://cdn.jsdelivr.net/npm/scandit-sdk@5.x/build/",
//     engineLocation: "https://cdn.jsdelivr.net/npm/scandit-sdk@5.x/build/",
//   }
// )
//   .then(() => {
//     ScanditSDK.CameraAccess.getCameras();
//     return ScanditSDK.BarcodePicker.create(
//       document.getElementById("scandit-barcode-picker"),
//       {
//         playSoundOnScan: true,
//         vibrateOnScan: true,
//         scanSettings: new ScanditSDK.ScanSettings({
//           enabledSymbologies: [
//             "ean8",
//             "ean13",
//             "upca",
//             "upce",
//             "code128",
//             "code39",
//             "code93",
//             "itf",
//           ],
//           codeDuplicateFilter: 1000,
//         }),
//       }
//     ).then((barcodePicker) => {
//       barcodePicker
//         .on("scan", (scanResult) => {
//           document.getElementById("scandit-barcode-result").innerHTML =
//             scanResult.barcodes.reduce((string, barcode) => {
//               return `${string}${ScanditSDK.Barcode.Symbology.toHumanizedName(
//                 barcode.symbology
//               )}: ${barcode.data}<br/>`;
//             }, "");
//           console.log(scanResult);
//         })
//         .on("scanError", (error) => {
//           console.error(error);
//         });
//     });
//   })
//   .catch((error) => {
//     console.error(error);
//     alert(error);
//   });
