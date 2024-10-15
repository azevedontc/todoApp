namespace EstoqueResidencial.Modelo;

public class TarefaModelo(int tarefaId, string nome, string descricao, data: Date, bool completa)
{

    public TarefaModelo(int tarefaId, string nome, string descricao, data: Date)
    {
        this.tarefaId = tarefaId;
        this.nome = nome;
        this.descricao = descricao;
        this.data = data;
    }

    public int TarefaId { get; set; } = tarefaId;
    public string Nome { get; set; } = nome;
    public string Descricao { get; set; } = descricao;
    public Date Data { get; set; } = data;
    public bool Completa { get; set; } = completa;

    public override string ToString()
    {
        return $"{TarefaId} - {Nome}";
    }
    
    public override bool Equals(object? obj)
    {
        if(obj?.GetType() != typeof()) return false;
        if((obj as TarefaModelo)?.TarefaId != TarefaModelo) return false;
        
        return base.Equals(obj);
    }

    public override int GetHashCode()
    {
        return TarefaId.GetHashCode();
    }
}