"use client";

import React from "react";

export default function FinalizarCompraButton() {
  function handleClick() {
    alert("Simulação de pagamento concluída!");
  }

  return (
    <button
      className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
      onClick={handleClick}
    >
      Finalizar compra
    </button>
  );
}
