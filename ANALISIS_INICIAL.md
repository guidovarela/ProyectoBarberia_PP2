# FICHA DE PROYECTO - Equipo N° 3

## 👥 Integrantes
- Becco, Nicolás
- Cortez, Carlos
- Rojas Álvarez, Airam
- Varela Coletta, Guido
- Vazquez Schmidt, Mauro

---

## 📌 Problemática Seleccionada
**Sistema de Gestión de Turnos**

---

## 1. Descripción Detallada del Problema (El "Dolor")
El sistema busca resolver los siguientes puntos de dolor operativos y comerciales:

* **Pérdida de turnos y superposición:** Conflictos por agenda en papel o chats desorganizados (WhatsApp/Instagram) donde se solapan horarios.
* **Inasistencias sin aviso (*No-shows*):** Clientes que reservan y no se presentan, dejando huecos improductivos en la agenda del barber.
* **Gestión ineficiente del tiempo:** Pérdida de tiempo del personal atendiendo mensajes/llamadas para coordinar horarios durante la jornada laboral.
* **Falta de visibilidad e historial:** Dificultad para conocer el historial de servicios de un cliente o calcular las comisiones exactas de cada barber al final del día/semana.

---

## 2. Identificación de Actores (Stakeholders)

| Nivel | Rol | Descripción del Rol / Responsabilidades |
| :---: | :--- | :--- |
| **0** | **SuperAdmin** | Proveedores/Desarrolladores del software. Gestionan la plataforma a alto nivel, altamientos de empresas/dueños y licenciamiento del sistema. |
| **1** | **Administradores (Soporte)** | Empleados del equipo de software encargados de la asistencia técnica, resolución de incidencias y soporte operativo a los usuarios. |
| **2** | **Dueño** | Propietario de toda la cadena de sucursales. Posee visión global del negocio, reportes consolidados, métricas financieras y configuración general de la marca. |
| **3** | **Encargado / Manager** | Responsable operativo de una sucursal específica. Gestiona los horarios del personal de su sede, supervisa la agenda local y resuelve contingencias diarias. |
| **4** | **Staff** | Personal operativo de la barbería (recepción, cajero, barberos, etc.). Consultan agenda diaria, registran atenciones/cobros y gestionan sus comisiones. |
| **5** | **Cliente** | Usuario final que accede (principalmente vía móvil) para consultar disponibilidad, reservar, reprogramar o cancelar turnos y recibir recordatorios. |

---

## 3. Definición de la Decisión Clave del Software

### ❓ Pregunta Central:
> *"¿Está el cliente X habilitado y cuenta el barbero Y con la disponibilidad horaria continua necesaria para confirmar la reserva del servicio Z en la fecha y hora solicitadas?"*

---

### ⚙️ Desglose de la lógica que el sistema responde automáticamente:

1. **Habilitación del cliente:**
   * Verifica que el cliente no tenga bloqueos por reincidencia en *no-shows* (inasistencias sin aviso) o reservas duplicadas en el mismo rango horario.

2. **Disponibilidad del barbero:**
   * Comprueba que el barbero seleccionado esté en su jornada laboral activa y no tenga francos, descansos o licencias registradas.

3. **Cálculo de tiempo continuo:**
   * Evalúa que el bloque de tiempo disponible (desde `hora_inicio` hasta `hora_inicio + duracion_servicio`) esté 100% libre y sin solapamiento con otros turnos ya confirmados.
