FICHA DE PROYECTO - Equipo N° 3
Integrantes:
Becco, Nicolás
Cortez, Carlos
Rojas Álvarez, Airam
Varela Coletta, Guido
Vazquez Schmidt, Mauro
Problemática Seleccionada:
Sistema de Gestión de turnos
1. Descripción Detallada del Problema (El "Dolor")
El sistema busca resolver los siguientes puntos de dolor operativos y comerciales:
Pérdida de turnos y superposición: Conflictos por agenda en papel o chats desorganizados (WhatsApp/Instagram) donde se solapan horarios.
Inasistencias sin aviso (No-shows): Clientes que reservan y no se presentan, dejando huecos improductivos en la agenda del barber.
Gestión ineficiente del tiempo: Pérdida de tiempo del personal atendiendo mensajes/llamadas para coordinar horarios durante la jornada laboral.
Falta de visibilidad e historial: Dificultad para conocer el historial de servicios de un cliente o calcular las comisiones exactas de cada barber al final del día/semana.

2. Identificación de Actores (Stakeholders)
[Listar los roles involucrados, describiendo su interés o necesidad principal con respecto al sistema.]
Rol 1 - Cliente: Descripcion del rol: Usuario final que accede al sistema (generalmente desde su celular) para consultar disponibilidad, reservar, reprogramar o cancelar turnos, y recibir notificaciones automáticas con los recordatorios de sus citas.
Rol 2: Staff /personal de Barberia): Descripcion del rol: ersonal operativo encargado de prestar los servicios. Utiliza el sistema para visualizar su agenda diaria de trabajo, consultar los servicios contratados por cada cliente y registrar la concreción de los turnos para el cálculo de sus comisiones.
Rol 3: Administrador o Dueño: Descripcion del rol: Usuario con acceso total a la gestión del negocio. Se encarga de configurar la oferta comercial (servicios, precios y duraciones), gestionar los perfiles del staff (horarios de trabajo, descansos y porcentajes de comisión), administrar la agenda general y consultar reportes e historial de turnos.
3. Definición de la Decisión Clave del Software
Pregunta Central:
"¿Está el cliente X habilitado y cuenta el barbero Y con la disponibilidad horaria continua necesaria para confirmar la reserva del servicio Z en la fecha y hora solicitadas?"
Desglose de la lógica que el sistema responde automáticamente:
Habilitación del cliente: Verifica que el cliente no tenga bloqueos por reincidencia en no-shows (inasistencias sin aviso) o reservas duplicadas en el mismo rango horario.
Disponibilidad del barbero: Comprueba que el barbero seleccionado esté en su jornada laboral activa y no tenga francos, descansos o licencias registradas.
Cálculo de tiempo continuo: Evalúa que el bloque de tiempo disponible (desde la hora de inicio hasta hora_inicio + duracion_servicio) esté 100% libre y sin solapamiento con otros turnos ya confirmados.
