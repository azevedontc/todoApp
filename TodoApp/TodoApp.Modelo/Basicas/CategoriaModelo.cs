namespace EstoqueResidencial.Modelo;

public class CategoriaModelo(int categoriaId, string nome)
{

    public int CategoriaId { get; set; } = categoriaId;
    public string Nome { get; set; } = nome;

    public override string ToString()
    {
        return $"{CategoriaId} - {Nome}";
    }
    
    public override bool Equals(object? obj)
    {
        if(obj?.GetType() != typeof(CategoriaModelo)) return false;
        if((obj as CategoriaModelo)?.CategoriaId != CategoriaId) return false;
        
        return base.Equals(obj);
    }

    public override int GetHashCode()
    {
        return CategoriaId.GetHashCode();
    }
}