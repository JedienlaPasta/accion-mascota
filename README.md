# Accion Mascota

## Descripción
(pendiente)

## Requerimientos Funcionales

### Ciudadano (Propietario)
| ID | Módulo | Descripción |
| :--- | :--- | :--- |
| **RF-CN-01** | Registro de cuenta | El sistema debe permitir a un ciudadano registrarse utilizando su RUT y correo electrónico, verificando previamente la inexistencia de duplicados en la base de datos. |
| **RF-CN-02** | Gestión de mascotas | El ciudadano debe poder agregar una o más mascotas a su perfil (incluso si no cuentan con un microchip inicial) y tener acceso y control sobre este registro. |
| **RF-CN-03** | Historial clínico | El ciudadano debe poder ver el historial médico de sus mascotas, incluyendo citas, consultas y tratamientos, en formato de solo lectura. |
| **RF-CN-04** | Agendamiento de citas | El ciudadano debe poder solicitar horas de atención para los servicios habilitados por la Veterinaria Municipal, cumpliendo con los requisitos estipulados. |
| **RF-CN-05** | Adopción de mascotas | El ciudadano debe poder acceder al catálogo de mascotas disponibles para adopción, enviar un formulario de postulación y hacer seguimiento del estado de su solicitud. |

### Usuario Municipal (Base)
| ID | Módulo | Descripción |
| :--- | :--- | :--- |
| **RF-UM-01** | Registro de usuarios | El usuario debe poder registrar ciudadanos (propietarios) en el sistema. |
| **RF-UM-02** | Registro de mascotas | El usuario debe poder ingresar nuevas mascotas al sistema. Estas pueden o no estar vinculadas a un propietario (ej. animales rescatados o comunitarios). |
| **RF-UM-03** | Gestión de agenda | El usuario debe poder visualizar y gestionar citas médicas. |
| **RF-UM-04** | Actualización ficha animal | El usuario debe poder modificar los datos del registro de una mascota, haciendo énfasis en la actualización del estado vital y el número de microchip. |
| **RF-UM-05** | Gestión de adopciones | El usuario debe poder evaluar las solicitudes de adopción ingresadas por los ciudadanos, cambiando su estado (Aprobada, Rechazada, En Revisión) y emitiendo comentarios de retroalimentación. |
| **RF-UM-06** | Dashboard y métricas | El usuario debe tener acceso a un panel para visualizar estadísticas globales de la plataforma (ej. total de mascotas registradas, adopciones concretadas, volumen de atenciones). |

### Veterinario (Usuario Municipal)
| ID | Módulo | Descripción |
| :--- | :--- | :--- |
| **RF-VM-01** | Registro atención clínica | El veterinario debe poder generar registros de "Consulta Médica" asociados a una mascota, documentando variables clínicas como anamnesis, tratamiento, peso, diagnósticos, etc. |
| **RF-VM-02** | Herencia operativa | El veterinario cuenta con todos los privilegios de un Usuario Municipal. |

### Funcionario (Usuario Municipal)
| ID | Módulo | Descripción |
| :--- | :--- | :--- |
| **RF-FM-01** | Generar reportes | El sistema debe permitir al funcionario generar y exportar reportes estadísticos mensuales sobre atenciones y métricas operativas para uso administrativo. |
| **RF-FM-02** | Herencia operativa | El funcionario cuenta con todos los privilegios de un Usuario Municipal. |

### Administrador (Jefatura)
| ID | Módulo | Descripción |
| :--- | :--- | :--- |
| **RF-AM-01** | Gestión de personal | El administrador debe contar con privilegios para crear cuentas de acceso a nuevos funcionarios o veterinarios, así como inhabilitarlas cuando cesen sus funciones en la municipalidad. |
| **RF-AM-02** | Herencia operativa | El administrador cuenta con todos los privilegios de un Funcionario/Veterinario, pudiendo intervenir en el agendamiento, registro y gestión de mascotas para apoyar operativamente al equipo. |

## Diagrama de Datos
![Diagrama de Datos](./diagrama-datos.png)