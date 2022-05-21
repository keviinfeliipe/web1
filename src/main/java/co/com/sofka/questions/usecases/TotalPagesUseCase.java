package co.com.sofka.questions.usecases;

import co.com.sofka.questions.reposioties.QuestionRepository;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

import java.util.function.Supplier;

@Service
public class TotalPagesUseCase implements Supplier<Mono<Long>> {

    private final QuestionRepository repository;

    public TotalPagesUseCase(QuestionRepository repository) {
        this.repository = repository;
    }

    @Override
    public Mono<Long> get() {
            return repository.count().map(data->{
                return (long)Math.ceil(((float)data/10)) ;
            });
    }
}
