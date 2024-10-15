namespace EstoqueResidencial.Modelo.Interfaces.Repositorios;

public interface IRepositorioCRUDGenerico<T> where T : class
{

    void Adicionar(T entidade);
    
    void Atualizar(T entidade);
    
    
    
    

}