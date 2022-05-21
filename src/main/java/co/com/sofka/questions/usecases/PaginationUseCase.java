package co.com.sofka.questions.usecases;

import co.com.sofka.questions.model.PageDTO;
import co.com.sofka.questions.model.QuestionDTO;
import co.com.sofka.questions.reposioties.QuestionRepository;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;

import java.util.function.Function;

@Service
public class PaginationUseCase implements Function<PageDTO, Flux<QuestionDTO>> {

    private final QuestionRepository repository;
    private final MapperUtils mapperUtils;

    public PaginationUseCase(QuestionRepository questionRepository, MapperUtils mapperUtils) {
        this.repository = questionRepository;
        this.mapperUtils = mapperUtils;
    }

    @Override
    public Flux<QuestionDTO> apply(PageDTO pageDTO) {
        return repository.findAll()
                .skip(PageDTO.PAGESIZE * pageDTO.getPageNumber())
                .take(PageDTO.PAGESIZE)
                .map(mapperUtils.mapEntityToQuestion());
    }
}
