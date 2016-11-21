namespace CEMEX.Entidades
{
    public class RespuestaData
    {
        public string MensajeException { get; set; }
        public bool ExisteError { get; set; }
    }

    public enum ETypeStatusRegistro : int
    {
        Todos = 0,
        Activo = 1,
        Inactivo = 2,
        Eliminado = 3
    }
}
