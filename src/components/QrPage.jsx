import React from 'react'
import {QRCodeSVG} from 'qrcode.react';

const QrPage = () => {
  return (
    <div>
      <h2>Scan this QR Code</h2>
      <QRCodeSVG value="http://192.168.1.26:5173/ar" size={200} />
    </div>
  )
}

export default QrPage
