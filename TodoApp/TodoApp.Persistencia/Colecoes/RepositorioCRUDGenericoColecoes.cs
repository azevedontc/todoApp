using EstoqueResidencial.Modelo.Interfaces.Repositorios;

namespace Persistencia.Basicas;

public class RepositorioCRUDGenericoColecoes<T>(List<T> repositorio) : IRepositorioCRUDGenerico<T> where T : class
{
    readonly List<T> repositorio = repositorio;

    public void Adicionar(T entidade)
    {
        if (repositorio.Contains(entidade))
            throw new Exception("Violação de chave primária");
        repositorio.Add(entidade);
    }

    public void Atualizar(T entidade)
    {
        throw new NotImplementedException();
    }

    public T? ObterPorId(int id)
    {
        throw new NotImplementedException();
    }

    public IEnumerable<T> ObterTodos()
    {
        return repositorio;
    }

    public void Remover(T entidade)
    {
        if (!repositorio.Contains(entidade))
            throw new Exception("Objeto inexistente");
        
        repositorio.Remove(entidade);
    }
}